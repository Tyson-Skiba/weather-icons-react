import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-1');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpuvindex1fillall = loadable(loader, {
  fallback: <FluidLoader />,
})
