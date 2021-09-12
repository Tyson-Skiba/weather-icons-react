import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmppartlycloudydayrainfilldarksky = loadable(loader, {
  fallback: <FluidLoader />,
})
