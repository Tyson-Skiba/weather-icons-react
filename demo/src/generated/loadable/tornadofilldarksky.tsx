import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'tornado');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmptornadofilldarksky = loadable(loader, {
  fallback: <FluidLoader />,
})
