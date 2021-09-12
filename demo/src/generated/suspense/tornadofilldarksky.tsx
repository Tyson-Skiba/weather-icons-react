import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('tornado');
  return <img src={svg} alt="weather icon" />;
}

export const Cmptornadofilldarksky: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)