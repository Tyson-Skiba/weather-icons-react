import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-glass-fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpthermometerglassfahrenheitfillall = loadable(loader, {
  fallback: <FluidLoader />,
})
