import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'thunderstorm');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cmpthunderstormfilldarksky = loadable(loader, {
  fallback: <FluidLoader />,
})
