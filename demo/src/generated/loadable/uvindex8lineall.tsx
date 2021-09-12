import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-8');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpuvindex8lineall = loadable(loader, {
  fallback: <FluidLoader />,
})
