import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmprainlinedarksky = loadable(loader, {
  fallback: <FluidLoader />,
})
