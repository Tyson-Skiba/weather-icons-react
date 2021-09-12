import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '03n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp03nlineopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
