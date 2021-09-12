import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const Cmppartlycloudynightrainlineall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)