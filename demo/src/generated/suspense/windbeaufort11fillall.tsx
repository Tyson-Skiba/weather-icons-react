import React from 'react';
import { repositories } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-11');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpwindbeaufort11fillall: React.FC = () => (
  <React.Suspense fallback={<FluidLoader />}>
    <Icon />
  </React.Suspense>
)