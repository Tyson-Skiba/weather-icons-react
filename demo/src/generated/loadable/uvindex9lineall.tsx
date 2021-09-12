import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-9');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpuvindex9lineall = loadable(loader, {
  fallback: <FluidLoader />,
})
