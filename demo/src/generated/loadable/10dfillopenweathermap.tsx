import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '10d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmp10dfillopenweathermap = loadable(loader, {
  fallback: <FluidLoader />,
})
