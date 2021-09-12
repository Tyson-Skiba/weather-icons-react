import React from 'react';
import { repositories } from 'react-weather-illustrations';

const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-mercury-cold');
  return <img src={svg} alt="weather icon" />;
}

export const Cmpthermometermercurycoldfillall: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)