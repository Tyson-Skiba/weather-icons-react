import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '13n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp13nlineopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
