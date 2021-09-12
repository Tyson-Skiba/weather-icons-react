import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-glass-celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpthermometerglasscelsiuslineall = loadable(loader, {
  fallback: <FluidLoader />,
})
