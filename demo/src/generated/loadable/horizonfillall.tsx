import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'horizon');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmphorizonfillall = loadable(loader, {
  fallback: <FluidLoader />,
})
