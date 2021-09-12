# react-weather-illustrations

[![Demo app](https://img.shields.io/badge/demo-app-ff69b4)](https://tyson-skiba.github.io/weather-icons-react/) [![Bundle size](https://badgen.net/bundlephobia/min/react-weather-illustrations)](react-weather-illustrations) [![Support](https://img.shields.io/badge/react-%3E%3D16.3-brightgreen)](https://img.shields.io/badge/react-%3E%3D16.8-brightgreen) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This is a react wrapper for the awesome [weather icon library](https://www.npmjs.com/package/@bybas/weather-icons) produced by [Bas Milius](https://bas.dev/).
This library is rather large (2mb) so my wrapper uses dynamic imports to request the icon when you need it instead of adding the entire icon library to your initial bundle.

## Usage

Currently this can be used with suspense, dynamic loading libraries such as react loadable or with a basic hook.

### Promise

This is the basic loader for use with everything except React suspense.
Currently there are two.

#### String Loader

```tsx
import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';

const Demo: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();

    useEffect(() => {
        const getIcon = async () => {
            const data = await loadSvgStringAsync('darksky', 'fill', 'clear-day');
            setIcon(data);
        }

        getIcon();
    }, []);

    return icon 
        ? <img src={icon} alt="weather icon" /> 
        : <div>Loading...</div>;
}

```

#### JSX Loader

```tsx
import React, { useState, useEffect } from 'react';
import { loadAsync } from 'react-weather-illustrations';

const Temperature: React.FC = () => {
    const [Icon, setIcon] = useState<JSX.Element | undefined>();

    useEffect(() => {
        const getIcon = async () => {
            const icon = await loadAsync('darksky', 'fill', 'clear-day');
            setIcon(icon);
        }

        getIcon();
    }, []);

    return Icon ? <Icon /> : <div>Loading...</div>;
}

```

### Suspense

Because suspense is reliant on a different flow this library exports `repositories` which are essentially just fetchers that cache and throw the result.

```tsx
import React, { Suspense } from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
    const svg = repositories.fill.darksky.read('clear-night');
    return <img src={svg} alt="weather icon" />;
}

export const Temperature: React.FC = () => (
    <Suspense fallback={<div>Loading</div>}>
        <Icon />
    </Suspense>
)
```

### Loadable

This is an example of how this library can be used with one of many third party loading tools.

```tsx
import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';

const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'clear-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Temperature = loadable(loader, {
  fallback: <div>Loading...</div>,
})
```
