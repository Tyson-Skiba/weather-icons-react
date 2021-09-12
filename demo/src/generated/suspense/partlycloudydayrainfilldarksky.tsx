import React from 'react';
import { repositories } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('partly-cloudy-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const Cmppartlycloudydayrainfilldarksky: React.FC = () => (
  <React.Suspense fallback={<FluidLoader />}>
    <Icon />
  </React.Suspense>
)