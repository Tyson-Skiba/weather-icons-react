import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '04n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp04nlineopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
