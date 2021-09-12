import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-5');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpuvindex5fillall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)