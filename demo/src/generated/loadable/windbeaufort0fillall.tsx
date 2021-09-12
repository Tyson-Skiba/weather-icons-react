import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-0');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpwindbeaufort0fillall = loadable(loader, {
  fallback: <FluidLoader />,
})
