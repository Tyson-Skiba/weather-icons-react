import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpfogfillall = loadable(loader, {
  fallback: <FluidLoader />,
})
