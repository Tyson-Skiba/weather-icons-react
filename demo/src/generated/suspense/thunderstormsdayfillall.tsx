import React from 'react';
import { repositories } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-day');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpthunderstormsdayfillall: React.FC = () => (
  <React.Suspense fallback={<FluidLoader />}>
    <Icon />
  </React.Suspense>
)