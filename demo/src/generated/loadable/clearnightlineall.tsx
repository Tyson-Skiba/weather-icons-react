import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'clear-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpclearnightlineall = loadable(loader, {
  fallback: <FluidLoader />,
})
