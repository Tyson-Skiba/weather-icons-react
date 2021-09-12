import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('09d');
  return <img src={svg} alt="weather icon" />;
}

export const Cmp09dlineopenweathermap: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)