import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'not-available');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpnotavailablelineall = loadable(loader, {
  fallback: <FluidLoader />,
})
