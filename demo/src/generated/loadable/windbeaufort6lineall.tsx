import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-6');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpwindbeaufort6lineall = loadable(loader, {
  fallback: <FluidLoader />,
})
