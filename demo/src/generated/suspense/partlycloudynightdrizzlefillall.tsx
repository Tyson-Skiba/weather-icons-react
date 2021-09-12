import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const Cmppartlycloudynightdrizzlefillall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)