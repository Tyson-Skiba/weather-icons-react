import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpclearnightlinedarksky: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)