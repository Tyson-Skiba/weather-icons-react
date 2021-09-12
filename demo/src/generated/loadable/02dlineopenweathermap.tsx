import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '02d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp02dlineopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
