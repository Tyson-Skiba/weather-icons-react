import * as path from 'path';
import { promises as fs, constants } from 'fs';

console.log('Building');

/* Warning 
 * This work by walking the package file structure.
 * This may break when the icon author updates the source package.
 * This is because we are not using a public API.
 */

type IconNames = Record<string, Record<string, string>>;
type IconSet = Record<string, IconNames>;
type IconMap = Record<string, IconSet>;

const outputPath = path.join(__dirname, 'src', 'icon-map.ts');
const orgPath = path.join(__dirname, './node_modules', '@bybas');
const packagePath = path.join(orgPath, 'weather-icons');
const rootPath = path.join(packagePath, 'production');

const mapTemplate = `/* THIS IS A GENERATED FILE */
/* DO NOT EDIT ME DIRECTLLY */

export const mappedIcons = {{ iconMap }};
`;

const checkIfPathExists = async (file: string) => {
    try {
        await fs.access(file, constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}

const halt = (message: string) => {
    console.error(message);
    process.exit(-1);
}

const readIconSets = (iconType: string) => fs.readdir(path.join(rootPath, iconType));
const readIconNames = (iconType: string, iconSet: string) => fs.readdir(path.join(rootPath, iconType, iconSet));

const build = async () => {
    const hasOrgFolder = await checkIfPathExists(orgPath);
    if (!hasOrgFolder) halt('Could not find the icon package');

    const hasPackageFolder = await checkIfPathExists(packagePath);
    if (!hasPackageFolder) halt('Could not find the icon package');

    const hasRootFolder = await checkIfPathExists(rootPath);
    if (!hasRootFolder) halt('Could not find the production folder, perhaps the packages internal API has changed?');

    const iconTypes = await fs.readdir(rootPath);
    if (!iconTypes.length) halt('Could not find the icon types (expected fill and line), perhaps the packages internal API has changed?');

    const iconMapPromises = iconTypes.map(async (iconType) => {
        const iconSets = await readIconSets(iconType);
        const iconNamePromises = iconSets.map(async (iconSet) => {
            const names = await readIconNames(iconType, iconSet);
            return {
                [iconSet]: names,
            }
        });

        const iconNames = await Promise.all(iconNamePromises);
        return {
            [iconType]: iconNames,
        }
    })

    const iconMaps = await Promise.all(iconMapPromises);

    const mappedIcons: IconSet = {};

    /* This is bad code, refactor */
    /* iconMaps.forEach(imap => {
        const id = Object.keys(imap)[0];
        const setData = imap[id];

        const keyedSetData: IconSet = {}; 

        setData.forEach(data => {
            const keyedNames: IconNames = {};
            const typeDataId = Object.keys(data)[0];

            const typeData = data[typeDataId];

            const nameDataId = Object.keys(typeData)[0];
            const names = typeData[nameDataId];

            setDataKeys.forEach(dataKey => {
                const names = data[dataKey];
                keyedNames[dataKey] = names;
            });

            console.log(Object.keys(setData))
        })


        iconMap[id] = {};
    }) */

    iconMaps.forEach(iconTypeData => { 
        const iconTypeId = Object.keys(iconTypeData)[0];
        const iconSetsData = iconTypeData[iconTypeId];
    
        const mappedNames: IconNames = {};
        iconSetsData.forEach(iconSetData => {
            const iconSetId = Object.keys(iconSetData)[0];
            const iconNamesData = iconSetData[iconSetId];

            const iconNamesMap: Record<string, string> = {};

            iconNamesData.forEach(value => {
                iconNamesMap[value.replace('.svg', '')] = value;
            })
            
            mappedNames[iconSetId] = iconNamesMap;
        })
    
        mappedIcons[iconTypeId] = mappedNames;
    })

    /* TODO: Compare to old file and make sure api isn't stuffed */

    const fileContents = mapTemplate.replace('{{ iconMap }}', JSON.stringify(mappedIcons, null, 4));
    await fs.writeFile(outputPath, fileContents);
}

build()
    .then(_ => console.log('Done'));
