import React from 'react';
import { createRepository } from './create-repository';

import { mappedIcons } from './icon-map';

type MapType = typeof mappedIcons;

type IconType = keyof MapType;
type IconMapType<TIconType extends IconType> = MapType[TIconType];
type IconSet<TIconType extends IconType> = keyof IconMapType<TIconType>;
type IconNames<TIconType extends IconType, T extends IconSet<TIconType>> = keyof IconMapType<TIconType>[T];

export type OpenWeatherMapIdentifier<TIconType extends IconType = 'fill'> = IconNames<TIconType, 'openweathermap'>;

type CurriedIconRequestArguments<TIconType extends IconType, T extends IconSet<TIconType>> = [IconType, IconNames<TIconType, T>];
type IconRequestFunction<TIconType extends IconType, T extends IconSet<TIconType>> = (...args: CurriedIconRequestArguments<TIconType, T>) => string;

type IconRepositories<TIconType extends IconType> = {
	[P in IconSet<TIconType>]: {
		read: IconRequestFunction<TIconType, P>
	}
}

type IconRepositoryExport = {
	[P in IconType]: IconRepositories<P>
}

type ReaderFactory<TIconType extends IconType, T extends IconSet<TIconType>> = {
	create: (...args: [IconType, IconNames<TIconType, T>]) => Promise<string>;
}

interface SvgImport {
	default: string;
}

/*
declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<
      SVGSVGElement
    > & { title?: string }>;
  
    const src: string;
    export default src;
}
*/

const cache: Record<string, SvgImport> = {};

async function loadIconSvgAsync<TIconType extends IconType, T extends IconSet<TIconType>>(iconSet: T, iconType: IconType, iconName: IconNames<TIconType, T>) {
	const cacheKey = `${iconSet}${iconType}${iconName}`;
    const svg = cache.hasOwnProperty(cacheKey)
		? cache[cacheKey]
		: await import(`@bybas/weather-icons/production/${iconType}/${iconSet}/${iconName}.svg`) as SvgImport;

	if (!cache.hasOwnProperty(cacheKey)) cache[cacheKey] = svg;

    return svg.default;
}

async function loadIconAsync<TIconType extends IconType, T extends IconSet<TIconType>>(iconSet: T, iconType: IconType, iconName: IconNames<TIconType, T>) {
	const svg = await loadIconSvgAsync(iconSet, iconType, iconName);
    return <img src={svg} alt={iconName as string} />;
}

function readerFactory<TIconType extends IconType, T extends IconSet<TIconType>>(iconSet: T): ReaderFactory<TIconType, T>{
	return {
		create: async (iconType: IconType, iconName: IconNames<TIconType, T>) => {
			const svg = await import(`@bybas/weather-icons/production/${iconType}/${iconSet}/${iconName}.svg`) as SvgImport;
			return svg.default;
		}
	}
}

const fill: IconRepositories<'fill'> = {
	all: createRepository<string, CurriedIconRequestArguments<'fill', 'all'>>(readerFactory<'fill', 'all'>('all').create),
	darksky: createRepository<string, CurriedIconRequestArguments<'fill', 'darksky'>>(readerFactory<'fill', 'darksky'>('darksky').create),
	openweathermap: createRepository<string, CurriedIconRequestArguments<'fill', 'openweathermap'>>(readerFactory<'fill', 'openweathermap'>('openweathermap').create),
}

const line: IconRepositories<'line'> = {
	all: createRepository<string, CurriedIconRequestArguments<'line', 'all'>>(readerFactory<'line', 'all'>('all').create),
	darksky: createRepository<string, CurriedIconRequestArguments<'line', 'darksky'>>(readerFactory<'line', 'darksky'>('darksky').create),
	openweathermap: createRepository<string, CurriedIconRequestArguments<'line', 'openweathermap'>>(readerFactory<'line', 'openweathermap'>('openweathermap').create),
}

const repositories: IconRepositoryExport = {
	fill,
	line,
}

export const weatherIcon = {
	loadAsync: loadIconAsync,
	loadSvgStringAsync: loadIconSvgAsync,
	repositories,
}
