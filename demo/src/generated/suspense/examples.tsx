export const examples: Record<string, string> = {
    	'barometerfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('barometer');
  return <img src={svg} alt="weather icon" />;
}

export const Barometer: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'celsiusfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('celsius');
  return <img src={svg} alt="weather icon" />;
}

export const Celsius: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cleardayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('clear-day');
  return <img src={svg} alt="weather icon" />;
}

export const ClearDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'clearnightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const ClearNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cloudyfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('cloudy');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'compassfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('compass');
  return <img src={svg} alt="weather icon" />;
}

export const Compass: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'drizzlefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const Drizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustdayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('dust-day');
  return <img src={svg} alt="weather icon" />;
}

export const DustDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustnightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('dust-night');
  return <img src={svg} alt="weather icon" />;
}

export const DustNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustwindfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('dust-wind');
  return <img src={svg} alt="weather icon" />;
}

export const DustWind: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('dust');
  return <img src={svg} alt="weather icon" />;
}

export const Dust: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fahrenheitfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('fahrenheit');
  return <img src={svg} alt="weather icon" />;
}

export const Fahrenheit: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fallingstarsfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('falling-stars');
  return <img src={svg} alt="weather icon" />;
}

export const FallingStars: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fogdayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('fog-day');
  return <img src={svg} alt="weather icon" />;
}

export const FogDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fognightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('fog-night');
  return <img src={svg} alt="weather icon" />;
}

export const FogNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fogfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('fog');
  return <img src={svg} alt="weather icon" />;
}

export const Fog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hailfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('hail');
  return <img src={svg} alt="weather icon" />;
}

export const Hail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hazedayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('haze-day');
  return <img src={svg} alt="weather icon" />;
}

export const HazeDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hazenightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('haze-night');
  return <img src={svg} alt="weather icon" />;
}

export const HazeNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hazefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('haze');
  return <img src={svg} alt="weather icon" />;
}

export const Haze: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'horizonfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('horizon');
  return <img src={svg} alt="weather icon" />;
}

export const Horizon: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'humidityfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('humidity');
  return <img src={svg} alt="weather icon" />;
}

export const Humidity: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hurricanefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('hurricane');
  return <img src={svg} alt="weather icon" />;
}

export const Hurricane: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'lightningboltfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('lightning-bolt');
  return <img src={svg} alt="weather icon" />;
}

export const LightningBolt: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'mistfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('mist');
  return <img src={svg} alt="weather icon" />;
}

export const Mist: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonfirstquarterfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-first-quarter');
  return <img src={svg} alt="weather icon" />;
}

export const MoonFirstQuarter: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonfullfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-full');
  return <img src={svg} alt="weather icon" />;
}

export const MoonFull: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonlastquarterfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-last-quarter');
  return <img src={svg} alt="weather icon" />;
}

export const MoonLastQuarter: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonnewfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-new');
  return <img src={svg} alt="weather icon" />;
}

export const MoonNew: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaningcrescentfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-waning-crescent');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaningCrescent: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaninggibbousfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-waning-gibbous');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaningGibbous: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaxingcrescentfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-waxing-crescent');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaxingCrescent: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaxinggibbousfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moon-waxing-gibbous');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaxingGibbous: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonrisefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moonrise');
  return <img src={svg} alt="weather icon" />;
}

export const Moonrise: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonsetfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('moonset');
  return <img src={svg} alt="weather icon" />;
}

export const Moonset: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'notavailablefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('not-available');
  return <img src={svg} alt="weather icon" />;
}

export const NotAvailable: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'overcastdayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('overcast-day');
  return <img src={svg} alt="weather icon" />;
}

export const OvercastDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'overcastnightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('overcast-night');
  return <img src={svg} alt="weather icon" />;
}

export const OvercastNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'overcastfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('overcast');
  return <img src={svg} alt="weather icon" />;
}

export const Overcast: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaydrizzlefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayDrizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayfogfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-fog');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayFog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayhailfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-hail');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayHail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayhazefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-haze');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayHaze: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayrainfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaysleetfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-sleet');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaysmokefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-smoke');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySmoke: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaysnowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day-snow');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-day');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightdrizzlefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightDrizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightfogfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-fog');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightFog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynighthailfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-hail');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightHail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynighthazefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-haze');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightHaze: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightrainfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightsleetfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-sleet');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightSleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightsmokefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-smoke');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightSmoke: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightsnowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night-snow');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightSnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('partly-cloudy-night');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurehighaltfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('pressure-high-alt');
  return <img src={svg} alt="weather icon" />;
}

export const PressureHighAlt: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurehighfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('pressure-high');
  return <img src={svg} alt="weather icon" />;
}

export const PressureHigh: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurelowaltfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('pressure-low-alt');
  return <img src={svg} alt="weather icon" />;
}

export const PressureLowAlt: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurelowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('pressure-low');
  return <img src={svg} alt="weather icon" />;
}

export const PressureLow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'rainfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('rain');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'raindropfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('raindrop');
  return <img src={svg} alt="weather icon" />;
}

export const Raindrop: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'raindropsfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('raindrops');
  return <img src={svg} alt="weather icon" />;
}

export const Raindrops: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sleetfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('sleet');
  return <img src={svg} alt="weather icon" />;
}

export const Sleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'smokeparticlesfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('smoke-particles');
  return <img src={svg} alt="weather icon" />;
}

export const SmokeParticles: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'smokefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('smoke');
  return <img src={svg} alt="weather icon" />;
}

export const Smoke: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'snowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('snow');
  return <img src={svg} alt="weather icon" />;
}

export const Snow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'snowflakefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('snowflake');
  return <img src={svg} alt="weather icon" />;
}

export const Snowflake: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'solareclipsefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('solar-eclipse');
  return <img src={svg} alt="weather icon" />;
}

export const SolarEclipse: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'starfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('star');
  return <img src={svg} alt="weather icon" />;
}

export const Star: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'starrynightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('starry-night');
  return <img src={svg} alt="weather icon" />;
}

export const StarryNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sunrisefillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('sunrise');
  return <img src={svg} alt="weather icon" />;
}

export const Sunrise: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sunsetfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('sunset');
  return <img src={svg} alt="weather icon" />;
}

export const Sunset: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometercelsiusfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-celsius');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerCelsius: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometercolderfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-colder');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerColder: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerfahrenheitfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-fahrenheit');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerFahrenheit: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerglasscelsiusfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-glass-celsius');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerGlassCelsius: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerglassfahrenheitfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-glass-fahrenheit');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerGlassFahrenheit: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerglassfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-glass');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerGlass: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometermercurycoldfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-mercury-cold');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerMercuryCold: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometermercuryfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-mercury');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerMercury: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerwarmerfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer-warmer');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerWarmer: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thermometer');
  return <img src={svg} alt="weather icon" />;
}

export const Thermometer: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsdayrainfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsdaysnowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-day-snow');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsdayfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-day');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsnightrainfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsnightsnowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-night-snow');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsNightSnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsnightfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-night');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsrainfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-rain');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormssnowfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms-snow');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsSnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('thunderstorms');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorms: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'tornadofillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('tornado');
  return <img src={svg} alt="weather icon" />;
}

export const Tornado: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'umbrellafillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('umbrella');
  return <img src={svg} alt="weather icon" />;
}

export const Umbrella: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex1fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-1');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex1: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex10fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-10');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex10: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex11fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-11');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex11: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex2fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-2');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex2: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex3fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-3');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex3: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex4fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-4');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex4: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex5fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-5');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex5: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex6fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-6');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex6: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex7fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-7');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex7: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex8fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-8');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex8: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex9fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index-9');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex9: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindexfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('uv-index');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort0fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-0');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort0: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort1fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-1');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort1: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort10fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-10');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort10: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort11fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-11');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort11: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort12fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-12');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort12: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort2fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-2');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort2: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort3fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-3');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort3: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort4fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-4');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort4: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort5fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-5');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort5: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort6fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-6');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort6: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort7fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-7');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort7: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort8fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-8');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort8: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort9fillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind-beaufort-9');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort9: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('wind');
  return <img src={svg} alt="weather icon" />;
}

export const Wind: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windsockfillall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.all.read('windsock');
  return <img src={svg} alt="weather icon" />;
}

export const Windsock: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cleardayfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('clear-day');
  return <img src={svg} alt="weather icon" />;
}

export const ClearDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'clearnightfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const ClearNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cloudyfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('cloudy');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'drizzlefilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const Drizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fogfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('fog');
  return <img src={svg} alt="weather icon" />;
}

export const Fog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hailfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('hail');
  return <img src={svg} alt="weather icon" />;
}

export const Hail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayrainfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('partly-cloudy-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('partly-cloudy-day');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightrainfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('partly-cloudy-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('partly-cloudy-night');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'rainfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('rain');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sleetfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('sleet');
  return <img src={svg} alt="weather icon" />;
}

export const Sleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'snowfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('snow');
  return <img src={svg} alt="weather icon" />;
}

export const Snow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('thunderstorm');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorm: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'tornadofilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('tornado');
  return <img src={svg} alt="weather icon" />;
}

export const Tornado: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windfilldarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('wind');
  return <img src={svg} alt="weather icon" />;
}

export const Wind: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'01dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('01d');
  return <img src={svg} alt="weather icon" />;
}

export const ClearDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'01nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('01n');
  return <img src={svg} alt="weather icon" />;
}

export const ClearNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'02dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('02d');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'02nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('02n');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'03dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('03d');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'03nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('03n');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'04dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('04d');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'04nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('04n');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'09dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('09d');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'09nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('09n');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'10dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('10d');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'10nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('10n');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'11dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('11d');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorms: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'11nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('11n');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorms: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'13dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('13d');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'13nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('13n');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'50dfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('50d');
  return <img src={svg} alt="weather icon" />;
}

export const Mist: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'50nfillopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.fill.openweathermap.read('50n');
  return <img src={svg} alt="weather icon" />;
}

export const Mist: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'barometerlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('barometer');
  return <img src={svg} alt="weather icon" />;
}

export const Barometer: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'celsiuslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('celsius');
  return <img src={svg} alt="weather icon" />;
}

export const Celsius: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cleardaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('clear-day');
  return <img src={svg} alt="weather icon" />;
}

export const ClearDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'clearnightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const ClearNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cloudylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('cloudy');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'compasslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('compass');
  return <img src={svg} alt="weather icon" />;
}

export const Compass: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'drizzlelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const Drizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustdaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('dust-day');
  return <img src={svg} alt="weather icon" />;
}

export const DustDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustnightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('dust-night');
  return <img src={svg} alt="weather icon" />;
}

export const DustNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustwindlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('dust-wind');
  return <img src={svg} alt="weather icon" />;
}

export const DustWind: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'dustlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('dust');
  return <img src={svg} alt="weather icon" />;
}

export const Dust: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fahrenheitlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('fahrenheit');
  return <img src={svg} alt="weather icon" />;
}

export const Fahrenheit: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fallingstarslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('falling-stars');
  return <img src={svg} alt="weather icon" />;
}

export const FallingStars: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fogdaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('fog-day');
  return <img src={svg} alt="weather icon" />;
}

export const FogDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'fognightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('fog-night');
  return <img src={svg} alt="weather icon" />;
}

export const FogNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'foglineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('fog');
  return <img src={svg} alt="weather icon" />;
}

export const Fog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'haillineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('hail');
  return <img src={svg} alt="weather icon" />;
}

export const Hail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hazedaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('haze-day');
  return <img src={svg} alt="weather icon" />;
}

export const HazeDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hazenightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('haze-night');
  return <img src={svg} alt="weather icon" />;
}

export const HazeNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hazelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('haze');
  return <img src={svg} alt="weather icon" />;
}

export const Haze: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'horizonlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('horizon');
  return <img src={svg} alt="weather icon" />;
}

export const Horizon: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'humiditylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('humidity');
  return <img src={svg} alt="weather icon" />;
}

export const Humidity: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'hurricanelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('hurricane');
  return <img src={svg} alt="weather icon" />;
}

export const Hurricane: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'lightningboltlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('lightning-bolt');
  return <img src={svg} alt="weather icon" />;
}

export const LightningBolt: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'mistlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('mist');
  return <img src={svg} alt="weather icon" />;
}

export const Mist: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonfirstquarterlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-first-quarter');
  return <img src={svg} alt="weather icon" />;
}

export const MoonFirstQuarter: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonfulllineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-full');
  return <img src={svg} alt="weather icon" />;
}

export const MoonFull: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonlastquarterlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-last-quarter');
  return <img src={svg} alt="weather icon" />;
}

export const MoonLastQuarter: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonnewlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-new');
  return <img src={svg} alt="weather icon" />;
}

export const MoonNew: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaningcrescentlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-waning-crescent');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaningCrescent: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaninggibbouslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-waning-gibbous');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaningGibbous: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaxingcrescentlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-waxing-crescent');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaxingCrescent: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonwaxinggibbouslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moon-waxing-gibbous');
  return <img src={svg} alt="weather icon" />;
}

export const MoonWaxingGibbous: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonriselineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moonrise');
  return <img src={svg} alt="weather icon" />;
}

export const Moonrise: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'moonsetlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('moonset');
  return <img src={svg} alt="weather icon" />;
}

export const Moonset: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'notavailablelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('not-available');
  return <img src={svg} alt="weather icon" />;
}

export const NotAvailable: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'overcastdaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('overcast-day');
  return <img src={svg} alt="weather icon" />;
}

export const OvercastDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'overcastnightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('overcast-night');
  return <img src={svg} alt="weather icon" />;
}

export const OvercastNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'overcastlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('overcast');
  return <img src={svg} alt="weather icon" />;
}

export const Overcast: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaydrizzlelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayDrizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayfoglineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-fog');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayFog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayhaillineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-hail');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayHail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayhazelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-haze');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayHaze: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayrainlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaysleetlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-sleet');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaysmokelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-smoke');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySmoke: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaysnowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day-snow');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-day');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightdrizzlelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightDrizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightfoglineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-fog');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightFog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynighthaillineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-hail');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightHail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynighthazelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-haze');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightHaze: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightrainlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightsleetlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-sleet');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightSleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightsmokelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-smoke');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightSmoke: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightsnowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night-snow');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightSnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('partly-cloudy-night');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurehighaltlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('pressure-high-alt');
  return <img src={svg} alt="weather icon" />;
}

export const PressureHighAlt: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurehighlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('pressure-high');
  return <img src={svg} alt="weather icon" />;
}

export const PressureHigh: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurelowaltlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('pressure-low-alt');
  return <img src={svg} alt="weather icon" />;
}

export const PressureLowAlt: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'pressurelowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('pressure-low');
  return <img src={svg} alt="weather icon" />;
}

export const PressureLow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'rainlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('rain');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'raindroplineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('raindrop');
  return <img src={svg} alt="weather icon" />;
}

export const Raindrop: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'raindropslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('raindrops');
  return <img src={svg} alt="weather icon" />;
}

export const Raindrops: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sleetlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('sleet');
  return <img src={svg} alt="weather icon" />;
}

export const Sleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'smokeparticleslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('smoke-particles');
  return <img src={svg} alt="weather icon" />;
}

export const SmokeParticles: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'smokelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('smoke');
  return <img src={svg} alt="weather icon" />;
}

export const Smoke: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'snowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('snow');
  return <img src={svg} alt="weather icon" />;
}

export const Snow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'snowflakelineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('snowflake');
  return <img src={svg} alt="weather icon" />;
}

export const Snowflake: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'solareclipselineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('solar-eclipse');
  return <img src={svg} alt="weather icon" />;
}

export const SolarEclipse: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'starlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('star');
  return <img src={svg} alt="weather icon" />;
}

export const Star: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'starrynightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('starry-night');
  return <img src={svg} alt="weather icon" />;
}

export const StarryNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sunriselineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('sunrise');
  return <img src={svg} alt="weather icon" />;
}

export const Sunrise: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sunsetlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('sunset');
  return <img src={svg} alt="weather icon" />;
}

export const Sunset: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometercelsiuslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-celsius');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerCelsius: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometercolderlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-colder');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerColder: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerfahrenheitlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-fahrenheit');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerFahrenheit: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerglasscelsiuslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-glass-celsius');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerGlassCelsius: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerglassfahrenheitlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-glass-fahrenheit');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerGlassFahrenheit: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerglasslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-glass');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerGlass: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometermercurycoldlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-mercury-cold');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerMercuryCold: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometermercurylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-mercury');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerMercury: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerwarmerlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer-warmer');
  return <img src={svg} alt="weather icon" />;
}

export const ThermometerWarmer: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thermometerlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thermometer');
  return <img src={svg} alt="weather icon" />;
}

export const Thermometer: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsdayrainlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsdaysnowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-day-snow');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsdaylineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-day');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsnightrainlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsnightsnowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-night-snow');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsNightSnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsnightlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-night');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormsrainlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-rain');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormssnowlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms-snow');
  return <img src={svg} alt="weather icon" />;
}

export const ThunderstormsSnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormslineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('thunderstorms');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorms: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'tornadolineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('tornado');
  return <img src={svg} alt="weather icon" />;
}

export const Tornado: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'umbrellalineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('umbrella');
  return <img src={svg} alt="weather icon" />;
}

export const Umbrella: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex1lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-1');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex1: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex10lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-10');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex10: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex11lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-11');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex11: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex2lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-2');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex2: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex3lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-3');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex3: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex4lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-4');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex4: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex5lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-5');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex5: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex6lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-6');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex6: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex7lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-7');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex7: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex8lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-8');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex8: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindex9lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index-9');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex9: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'uvindexlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('uv-index');
  return <img src={svg} alt="weather icon" />;
}

export const UvIndex: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort0lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-0');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort0: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort1lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-1');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort1: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort10lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-10');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort10: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort11lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-11');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort11: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort12lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-12');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort12: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort2lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-2');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort2: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort3lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-3');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort3: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort4lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-4');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort4: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort5lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-5');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort5: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort6lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-6');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort6: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort7lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-7');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort7: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort8lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-8');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort8: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windbeaufort9lineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind-beaufort-9');
  return <img src={svg} alt="weather icon" />;
}

export const WindBeaufort9: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windlineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('wind');
  return <img src={svg} alt="weather icon" />;
}

export const Wind: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windsocklineall': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.all.read('windsock');
  return <img src={svg} alt="weather icon" />;
}

export const Windsock: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cleardaylinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('clear-day');
  return <img src={svg} alt="weather icon" />;
}

export const ClearDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'clearnightlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const ClearNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'cloudylinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('cloudy');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'drizzlelinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('drizzle');
  return <img src={svg} alt="weather icon" />;
}

export const Drizzle: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'foglinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('fog');
  return <img src={svg} alt="weather icon" />;
}

export const Fog: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'haillinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('hail');
  return <img src={svg} alt="weather icon" />;
}

export const Hail: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydayrainlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('partly-cloudy-day-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudydaylinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('partly-cloudy-day');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightrainlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('partly-cloudy-night-rain');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'partlycloudynightlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('partly-cloudy-night');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'rainlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('rain');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'sleetlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('sleet');
  return <img src={svg} alt="weather icon" />;
}

export const Sleet: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'snowlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('snow');
  return <img src={svg} alt="weather icon" />;
}

export const Snow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'thunderstormlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('thunderstorm');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorm: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'tornadolinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('tornado');
  return <img src={svg} alt="weather icon" />;
}

export const Tornado: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'windlinedarksky': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.darksky.read('wind');
  return <img src={svg} alt="weather icon" />;
}

export const Wind: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'01dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('01d');
  return <img src={svg} alt="weather icon" />;
}

export const ClearDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'01nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('01n');
  return <img src={svg} alt="weather icon" />;
}

export const ClearNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'02dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('02d');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDay: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'02nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('02n');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNight: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'03dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('03d');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'03nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('03n');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'04dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('04d');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'04nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('04n');
  return <img src={svg} alt="weather icon" />;
}

export const Cloudy: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'09dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('09d');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'09nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('09n');
  return <img src={svg} alt="weather icon" />;
}

export const Rain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'10dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('10d');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDayRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'10nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('10n');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyNightRain: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'11dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('11d');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorms: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'11nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('11n');
  return <img src={svg} alt="weather icon" />;
}

export const Thunderstorms: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'13dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('13d');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'13nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('13n');
  return <img src={svg} alt="weather icon" />;
}

export const PartlyCloudyDaySnow: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'50dlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('50d');
  return <img src={svg} alt="weather icon" />;
}

export const Mist: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`,
	'50nlineopenweathermap': `import React from 'react';
import { repositories } from 'react-weather-illustrations';


const Icon: React.FC = () => {
  const svg = repositories.line.openweathermap.read('50n');
  return <img src={svg} alt="weather icon" />;
}

export const Mist: React.FC = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Icon />
  </React.Suspense>
)`
}
