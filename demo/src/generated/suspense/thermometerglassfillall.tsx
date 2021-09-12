import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-glass');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpthermometerglassfillall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)