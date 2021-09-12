import React from 'react';
import { repositories } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day');
  return <img src={svg} alt="weather icon" />;
}

export const Cmppartlycloudydayfillall: React.FC = () => (
  <React.Suspense fallback={<FluidLoader />}>
    <Icon />
  </React.Suspense>
)