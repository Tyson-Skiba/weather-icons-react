import React from 'react';
import { repositories } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('starry-night');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpstarrynightfillall: React.FC = () => (
  <React.Suspense fallback={<FluidLoader />}>
    <Icon />
  </React.Suspense>
)