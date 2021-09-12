import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '11n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp11nlineopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
