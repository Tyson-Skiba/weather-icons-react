import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpthunderstormsnightrainlineall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)