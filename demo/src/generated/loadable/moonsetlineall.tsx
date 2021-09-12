import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moonset');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpmoonsetlineall = loadable(loader, {
  fallback: <FluidLoader />,
})
