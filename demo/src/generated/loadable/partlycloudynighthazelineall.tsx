import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmppartlycloudynighthazelineall = loadable(loader, {
  fallback: <FluidLoader />,
})
