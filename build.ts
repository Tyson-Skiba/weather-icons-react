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

interface IconConfig {
    name: string;
    set: string;
    type: string;
}

const outputPath = path.join(__dirname, 'src', 'icon-map.ts');
const orgPath = path.join(__dirname, './node_modules', '@bybas');
const packagePath = path.join(orgPath, 'weather-icons');
const rootPath = path.join(packagePath, 'production');

const demoComponentPath = path.join(__dirname, 'demo', 'src', 'generated');
const demoComponentPathSuspense = path.join(demoComponentPath, 'suspense');
const demoComponentPathFc = path.join(demoComponentPath, 'fc');

const mapTemplate = `/* THIS IS A GENERATED FILE */
/* DO NOT EDIT ME DIRECTLLY */

export const mappedIcons = {{ iconMap }};
`;

const suspenseTemplate = `import React from 'react';
import { repositories } from 'react-weather-illustrations';
{{ loaderImport }}

const Icon: React.FC = () => {
  const svg = repositories.{{ set }}.{{ type }}.read('{{ name }}');
  return <img src={svg} alt="weather icon" />;
}

export const {{ key }}: React.FC = () => (
  <React.Suspense fallback={{{ loader }}}>
    <Icon />
  </React.Suspense>
)`;

const fcTemplate = `import React, { useState, useEffect } from 'react';
{{ loaderImport }}

const {{ key }}: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('{{ type }}', '{{ set }}', '{{ name }}');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : {{ loader }};
}
`;

const supenseLoaderTemplate = `import React from 'react';

{{ imports }}

interface SuspenseLoaderProps {
    requestKey: string;
}

const components: Record<string, React.FC<{}>> = {
    {{ components }}
}

export const Loader: React.FC<SuspenseLoaderProps> = ({
    requestKey
}) => {
    const Cmp = components[\`Cmp\${requestKey}\`];
    return <Cmp />;
}
`;

const suspenseDemos = `export const examples: Record<string, string> = {
    {{ demos }}
}
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
    const icons: IconConfig[] = [];

    /* This is bad code, refactor */
    iconMaps.forEach(iconTypeData => { 
        const iconTypeId = Object.keys(iconTypeData)[0];
        const iconSetsData = iconTypeData[iconTypeId];
    
        const mappedNames: IconNames = {};
        iconSetsData.forEach(iconSetData => {
            const iconSetId = Object.keys(iconSetData)[0];
            const iconNamesData = iconSetData[iconSetId];

            const iconNamesMap: Record<string, string> = {};

            iconNamesData.forEach(value => {
                const name = value.replace('.svg', '');
                iconNamesMap[name] = value;
        
                icons.push({
                    name,
                    type: iconSetId,
                    set: iconTypeId,
                })
            })
            
            mappedNames[iconSetId] = iconNamesMap;
        })
    
        mappedIcons[iconTypeId] = mappedNames;
    })

    /* TODO: Compare to old file and make sure api isn't stuffed */

    const fileContents = mapTemplate.replace('{{ iconMap }}', JSON.stringify(mappedIcons, null, 4));
    await fs.writeFile(outputPath, fileContents);

    const importKeys: string[] = [];
    const suspenseDemoMap: string[] = [];
    const fcDemoMap: string[] = []

    const fileCreation = icons.flatMap(icon => {
        const key = `${icon.name}${icon.set}${icon.type}`.replace(/-/g, '');
        const importKey = `Cmp${key}`;

        importKeys.push(key);

        const suspsense = suspenseTemplate
            .replace('{{ name }}', icon.name)
            .replace('{{ set }}', icon.set)
            .replace('{{ type }}', icon.type)
            .replace('{{ loader }}', '<FluidLoader />')
            .replace('{{ loaderImport }}', 'import { FluidLoader } from \'../../components/fluid-loader\';')
            .replace('{{ key }}', importKey.replace(/-/g, ''));

        const suspenseCopyableDemo = suspenseTemplate
            .replace('{{ name }}', icon.name)
            .replace('{{ set }}', icon.set)
            .replace('{{ type }}', icon.type)
            .replace('{{ loader }}', '<div>Loading...</div>')
            .replace('{{ loaderImport }}', '')
            .replace('{{ key }}', icon.name);

        suspenseDemoMap.push(`\t'${key.replace(/-/g, '')}': \`${suspenseCopyableDemo}\``);

        const fc = fcTemplate
            .replace('{{ name }}', icon.name)
            .replace('{{ set }}', icon.set)
            .replace('{{ type }}', icon.type)
            .replace('{{ loader }}', '<FluidLoader />')
            .replace('{{ loaderImport }}', 'import { FluidLoader } from \'../../components/fluid-loader\';')
            .replace('{{ key }}', importKey.replace(/-/g, ''));

        const fcCopyableDemo = suspenseTemplate
            .replace('{{ name }}', icon.name)
            .replace('{{ set }}', icon.set)
            .replace('{{ type }}', icon.type)
            .replace('{{ loader }}', '<div>Loading...</div>')
            .replace('{{ loaderImport }}', '')
            .replace('{{ key }}', icon.name);

        fcDemoMap.push(`\t'${key.replace(/-/g, '')}': \`${fcCopyableDemo}\``);

        return [
            fs.writeFile(path.join(demoComponentPathSuspense, `${key}.tsx`), suspsense),
            fs.writeFile(path.join(demoComponentPathFc, `${key}.tsx`), fc),
        ];
    })

    await Promise.all(fileCreation);

    const suspenseIndex = supenseLoaderTemplate
        .replace('{{ imports }}', importKeys.map(key => `import { Cmp${key}} from './${key}';`).join('\n'))
        .replace('{{ components }}', importKeys.map(key => `Cmp${key}: Cmp${key}`).join(',\n'));

    await fs.writeFile(path.join(demoComponentPathSuspense, 'index.tsx'), suspenseIndex);

    const suspenseExamples = suspenseDemos
        .replace('{{ demos }}', suspenseDemoMap.join(',\n'));

    await fs.writeFile(path.join(demoComponentPathSuspense, 'examples.tsx'), suspenseExamples);

    const fcIndex = supenseLoaderTemplate
        .replace('{{ imports }}', importKeys.map(key => `import { Cmp${key}} from './${key}';`).join('\n'))
        .replace('{{ components }}', importKeys.map(key => `Cmp${key}: Cmp${key}`).join(',\n'));

    await fs.writeFile(path.join(demoComponentPathFc, 'index.tsx'), fcIndex);

    const fcExamples = suspenseDemos
        .replace('{{ demos }}', fcDemoMap.join(',\n'));

    await fs.writeFile(path.join(demoComponentPathFc, 'examples.tsx'), fcExamples);
}

build()
    .then(_ => console.log('Done'));
