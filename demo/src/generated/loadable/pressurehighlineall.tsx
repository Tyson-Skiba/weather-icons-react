import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'pressure-high');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmppressurehighlineall = loadable(loader, {
  fallback: <FluidLoader />,
})
