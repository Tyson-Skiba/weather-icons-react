import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmppartlycloudydaylinedarksky = loadable(loader, {
  fallback: <FluidLoader />,
})
