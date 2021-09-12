import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-2');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpuvindex2lineall = loadable(loader, {
  fallback: <FluidLoader />,
})
