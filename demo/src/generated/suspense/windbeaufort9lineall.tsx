import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-9');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpwindbeaufort9lineall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)