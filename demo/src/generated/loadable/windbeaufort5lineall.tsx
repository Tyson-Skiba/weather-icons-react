import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-5');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpwindbeaufort5lineall = loadable(loader, {
  fallback: <FluidLoader />,
})
