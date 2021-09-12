import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmppartlycloudynightsnowfillall = loadable(loader, {
  fallback: <FluidLoader />,
})
