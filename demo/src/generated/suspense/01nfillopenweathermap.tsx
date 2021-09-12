import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('01n');
  return <img src={svg} alt="weather icon" />;
}

export const Cmp01nfillopenweathermap: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)