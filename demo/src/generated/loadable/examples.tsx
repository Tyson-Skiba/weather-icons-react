export const examples: Record<string, string> = {
    	'barometerfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'barometer');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Barometer = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'celsiusfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Celsius = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cleardayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'clear-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'clearnightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'clear-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cloudyfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'cloudy');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'compassfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'compass');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Compass = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'drizzlefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Drizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustdayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'dust-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const DustDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustnightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'dust-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const DustNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustwindfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'dust-wind');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const DustWind = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'dust');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Dust = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fahrenheitfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Fahrenheit = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fallingstarsfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'falling-stars');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const FallingStars = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fogdayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'fog-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const FogDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fognightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'fog-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const FogNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fogfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Fog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hailfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Hail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hazedayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'haze-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const HazeDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hazenightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'haze-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const HazeNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hazefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Haze = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'horizonfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'horizon');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Horizon = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'humidityfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'humidity');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Humidity = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hurricanefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'hurricane');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Hurricane = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'lightningboltfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'lightning-bolt');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const LightningBolt = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'mistfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'mist');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Mist = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonfirstquarterfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-first-quarter');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonFirstQuarter = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonfullfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-full');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonFull = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonlastquarterfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-last-quarter');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonLastQuarter = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonnewfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-new');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonNew = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaningcrescentfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-waning-crescent');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaningCrescent = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaninggibbousfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-waning-gibbous');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaningGibbous = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaxingcrescentfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-waxing-crescent');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaxingCrescent = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaxinggibbousfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moon-waxing-gibbous');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaxingGibbous = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonrisefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moonrise');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Moonrise = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonsetfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'moonset');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Moonset = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'notavailablefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'not-available');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const NotAvailable = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'overcastdayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'overcast-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const OvercastDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'overcastnightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'overcast-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const OvercastNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'overcastfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'overcast');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Overcast = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaydrizzlefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayDrizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayfogfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayFog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayhailfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayHail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayhazefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayHaze = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayrainfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaysleetfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaysmokefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-smoke');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySmoke = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaysnowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightdrizzlefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightDrizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightfogfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightFog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynighthailfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightHail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynighthazefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightHaze = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightrainfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightsleetfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightSleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightsmokefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-smoke');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightSmoke = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightsnowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightSnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurehighaltfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'pressure-high-alt');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureHighAlt = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurehighfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'pressure-high');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureHigh = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurelowaltfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'pressure-low-alt');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureLowAlt = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurelowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'pressure-low');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureLow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'rainfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'raindropfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'raindrop');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Raindrop = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'raindropsfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'raindrops');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Raindrops = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sleetfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'smokeparticlesfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'smoke-particles');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const SmokeParticles = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'smokefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'smoke');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Smoke = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'snowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Snow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'snowflakefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'snowflake');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Snowflake = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'solareclipsefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'solar-eclipse');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const SolarEclipse = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'starfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'star');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Star = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'starrynightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'starry-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const StarryNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sunrisefillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'sunrise');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sunrise = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sunsetfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'sunset');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sunset = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometercelsiusfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerCelsius = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometercolderfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-colder');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerColder = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerfahrenheitfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerFahrenheit = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerglasscelsiusfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-glass-celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerGlassCelsius = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerglassfahrenheitfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-glass-fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerGlassFahrenheit = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerglassfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-glass');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerGlass = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometermercurycoldfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-mercury-cold');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerMercuryCold = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometermercuryfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-mercury');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerMercury = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerwarmerfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer-warmer');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerWarmer = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thermometer');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thermometer = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsdayrainfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsdaysnowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-day-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsdayfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsnightrainfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-night-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsnightsnowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-night-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsNightSnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsnightfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsrainfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormssnowfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsSnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'thunderstorms');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorms = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'tornadofillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'tornado');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Tornado = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'umbrellafillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'umbrella');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Umbrella = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex1fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-1');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex1 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex10fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-10');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex10 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex11fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-11');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex11 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex2fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-2');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex2 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex3fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-3');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex3 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex4fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-4');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex4 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex5fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-5');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex5 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex6fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-6');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex6 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex7fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-7');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex7 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex8fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-8');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex8 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex9fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index-9');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex9 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindexfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'uv-index');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort0fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-0');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort0 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort1fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-1');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort1 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort10fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-10');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort10 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort11fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-11');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort11 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort12fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-12');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort12 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort2fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-2');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort2 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort3fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-3');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort3 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort4fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-4');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort4 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort5fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-5');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort5 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort6fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-6');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort6 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort7fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-7');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort7 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort8fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-8');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort8 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort9fillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-9');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort9 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'wind');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Wind = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windsockfillall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'fill', 'windsock');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Windsock = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cleardayfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'clear-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'clearnightfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'clear-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cloudyfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'cloudy');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'drizzlefilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Drizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fogfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Fog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hailfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Hail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayrainfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightrainfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-night-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'rainfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sleetfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'snowfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Snow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'thunderstorm');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorm = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'tornadofilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'tornado');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Tornado = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windfilldarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'fill', 'wind');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Wind = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'01dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '01d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'01nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '01n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'02dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '02d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'02nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '02n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'03dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '03d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'03nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '03n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'04dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '04d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'04nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '04n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'09dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '09d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'09nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '09n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'10dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '10d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'10nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '10n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'11dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '11d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorms = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'11nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '11n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorms = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'13dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '13d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'13nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '13n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'50dfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '50d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Mist = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'50nfillopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'fill', '50n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Mist = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'barometerlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'barometer');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Barometer = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'celsiuslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Celsius = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cleardaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'clear-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'clearnightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'clear-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cloudylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'cloudy');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'compasslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'compass');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Compass = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'drizzlelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Drizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustdaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'dust-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const DustDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustnightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'dust-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const DustNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustwindlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'dust-wind');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const DustWind = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'dustlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'dust');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Dust = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fahrenheitlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Fahrenheit = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fallingstarslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'falling-stars');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const FallingStars = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fogdaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'fog-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const FogDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'fognightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'fog-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const FogNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'foglineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Fog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'haillineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Hail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hazedaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'haze-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const HazeDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hazenightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'haze-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const HazeNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hazelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Haze = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'horizonlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'horizon');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Horizon = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'humiditylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'humidity');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Humidity = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'hurricanelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'hurricane');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Hurricane = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'lightningboltlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'lightning-bolt');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const LightningBolt = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'mistlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'mist');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Mist = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonfirstquarterlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-first-quarter');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonFirstQuarter = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonfulllineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-full');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonFull = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonlastquarterlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-last-quarter');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonLastQuarter = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonnewlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-new');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonNew = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaningcrescentlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-waning-crescent');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaningCrescent = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaninggibbouslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-waning-gibbous');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaningGibbous = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaxingcrescentlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-waxing-crescent');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaxingCrescent = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonwaxinggibbouslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moon-waxing-gibbous');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const MoonWaxingGibbous = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonriselineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moonrise');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Moonrise = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'moonsetlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'moonset');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Moonset = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'notavailablelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'not-available');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const NotAvailable = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'overcastdaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'overcast-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const OvercastDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'overcastnightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'overcast-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const OvercastNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'overcastlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'overcast');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Overcast = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaydrizzlelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayDrizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayfoglineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayFog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayhaillineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayHail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayhazelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayHaze = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayrainlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaysleetlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaysmokelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-smoke');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySmoke = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaysnowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightdrizzlelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightDrizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightfoglineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightFog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynighthaillineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightHail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynighthazelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-haze');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightHaze = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightrainlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightsleetlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightSleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightsmokelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-smoke');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightSmoke = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightsnowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightSnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurehighaltlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'pressure-high-alt');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureHighAlt = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurehighlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'pressure-high');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureHigh = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurelowaltlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'pressure-low-alt');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureLowAlt = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'pressurelowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'pressure-low');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PressureLow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'rainlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'raindroplineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'raindrop');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Raindrop = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'raindropslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'raindrops');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Raindrops = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sleetlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'smokeparticleslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'smoke-particles');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const SmokeParticles = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'smokelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'smoke');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Smoke = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'snowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Snow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'snowflakelineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'snowflake');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Snowflake = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'solareclipselineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'solar-eclipse');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const SolarEclipse = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'starlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'star');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Star = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'starrynightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'starry-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const StarryNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sunriselineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'sunrise');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sunrise = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sunsetlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'sunset');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sunset = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometercelsiuslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerCelsius = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometercolderlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-colder');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerColder = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerfahrenheitlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerFahrenheit = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerglasscelsiuslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-glass-celsius');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerGlassCelsius = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerglassfahrenheitlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-glass-fahrenheit');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerGlassFahrenheit = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerglasslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-glass');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerGlass = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometermercurycoldlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-mercury-cold');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerMercuryCold = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometermercurylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-mercury');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerMercury = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerwarmerlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer-warmer');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThermometerWarmer = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thermometerlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thermometer');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thermometer = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsdayrainlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsdaysnowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-day-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsdaylineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsnightrainlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-night-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsnightsnowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-night-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsNightSnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsnightlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormsrainlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormssnowlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms-snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ThunderstormsSnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormslineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'thunderstorms');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorms = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'tornadolineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'tornado');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Tornado = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'umbrellalineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'umbrella');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Umbrella = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex1lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-1');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex1 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex10lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-10');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex10 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex11lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-11');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex11 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex2lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-2');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex2 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex3lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-3');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex3 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex4lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-4');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex4 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex5lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-5');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex5 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex6lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-6');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex6 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex7lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-7');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex7 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex8lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-8');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex8 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindex9lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index-9');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex9 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'uvindexlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'uv-index');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const UvIndex = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort0lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-0');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort0 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort1lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-1');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort1 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort10lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-10');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort10 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort11lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-11');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort11 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort12lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-12');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort12 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort2lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-2');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort2 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort3lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-3');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort3 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort4lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-4');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort4 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort5lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-5');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort5 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort6lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-6');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort6 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort7lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-7');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort7 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort8lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-8');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort8 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windbeaufort9lineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind-beaufort-9');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const WindBeaufort9 = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windlineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'wind');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Wind = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windsocklineall': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('all', 'line', 'windsock');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Windsock = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cleardaylinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'clear-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'clearnightlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'clear-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'cloudylinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'cloudy');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'drizzlelinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'drizzle');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Drizzle = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'foglinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'fog');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Fog = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'haillinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'hail');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Hail = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydayrainlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-day-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudydaylinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-day');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightrainlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-night-rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'partlycloudynightlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-night');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'rainlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'rain');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'sleetlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'sleet');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Sleet = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'snowlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'snow');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Snow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'thunderstormlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'thunderstorm');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorm = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'tornadolinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'tornado');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Tornado = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'windlinedarksky': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('darksky', 'line', 'wind');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Wind = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'01dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '01d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'01nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '01n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const ClearNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'02dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '02d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDay = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'02nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '02n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNight = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'03dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '03d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'03nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '03n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'04dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '04d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'04nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '04n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Cloudy = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'09dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '09d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'09nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '09n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Rain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'10dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '10d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDayRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'10nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '10n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyNightRain = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'11dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '11d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorms = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'11nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '11n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Thunderstorms = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'13dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '13d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'13nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '13n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const PartlyCloudyDaySnow = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'50dlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '50d');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Mist = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`,
	'50nlineopenweathermap': `import React from 'react';
import loadable from '@loadable/component';
import { loadSvgStringAsync } from 'react-weather-illustrations';


const loader = async () => {
  const icon = await loadSvgStringAsync('openweathermap', 'line', '50n');
  return {
    default: () => <img src={icon} alt="" />
  }
};

export const Mist = loadable(loader, {
  fallback: <div>Loading...</div>,
})
`
}
