import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '02n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp02nlineopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
