import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-7');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpwindbeaufort7fillall = loadable(loader, {
  fallback: <FluidLoader />,
})
