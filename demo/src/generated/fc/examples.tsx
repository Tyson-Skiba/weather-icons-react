export const examples: Record<string, string> = {
    	'barometerfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Barometer: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'barometer');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'celsiusfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Celsius: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'celsius');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cleardayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'clear-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'clearnightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'clear-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cloudyfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'cloudy');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'compassfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Compass: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'compass');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'drizzlefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Drizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustdayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const DustDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'dust-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustnightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const DustNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'dust-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustwindfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const DustWind: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'dust-wind');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Dust: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'dust');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fahrenheitfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Fahrenheit: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'fahrenheit');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fallingstarsfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const FallingStars: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'falling-stars');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fogdayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const FogDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'fog-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fognightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const FogNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'fog-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fogfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Fog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hailfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Hail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hazedayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const HazeDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'haze-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hazenightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const HazeNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'haze-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hazefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Haze: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'haze');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'horizonfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Horizon: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'horizon');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'humidityfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Humidity: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'humidity');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hurricanefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Hurricane: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'hurricane');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'lightningboltfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const LightningBolt: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'lightning-bolt');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'mistfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Mist: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'mist');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonfirstquarterfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonFirstQuarter: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-first-quarter');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonfullfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonFull: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-full');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonlastquarterfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonLastQuarter: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-last-quarter');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonnewfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonNew: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-new');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaningcrescentfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaningCrescent: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-waning-crescent');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaninggibbousfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaningGibbous: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-waning-gibbous');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaxingcrescentfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaxingCrescent: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-waxing-crescent');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaxinggibbousfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaxingGibbous: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moon-waxing-gibbous');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonrisefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Moonrise: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moonrise');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonsetfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Moonset: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'moonset');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'notavailablefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const NotAvailable: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'not-available');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'overcastdayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const OvercastDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'overcast-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'overcastnightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const OvercastNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'overcast-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'overcastfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Overcast: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'overcast');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaydrizzlefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayDrizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayfogfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayFog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayhailfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayHail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayhazefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayHaze: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-haze');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayrainfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaysleetfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaysmokefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySmoke: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-smoke');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaysnowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightdrizzlefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightDrizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightfogfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightFog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynighthailfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightHail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynighthazefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightHaze: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-haze');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightrainfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightsleetfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightSleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightsmokefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightSmoke: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-smoke');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightsnowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightSnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'partly-cloudy-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurehighaltfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureHighAlt: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'pressure-high-alt');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurehighfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureHigh: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'pressure-high');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurelowaltfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureLowAlt: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'pressure-low-alt');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurelowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureLow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'pressure-low');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'rainfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'raindropfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Raindrop: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'raindrop');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'raindropsfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Raindrops: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'raindrops');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sleetfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'smokeparticlesfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const SmokeParticles: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'smoke-particles');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'smokefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Smoke: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'smoke');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'snowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Snow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'snowflakefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Snowflake: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'snowflake');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'solareclipsefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const SolarEclipse: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'solar-eclipse');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'starfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Star: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'star');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'starrynightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const StarryNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'starry-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sunrisefillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sunrise: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'sunrise');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sunsetfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sunset: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'sunset');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometercelsiusfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerCelsius: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-celsius');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometercolderfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerColder: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-colder');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerfahrenheitfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerFahrenheit: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-fahrenheit');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerglasscelsiusfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerGlassCelsius: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-glass-celsius');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerglassfahrenheitfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerGlassFahrenheit: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-glass-fahrenheit');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerglassfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerGlass: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-glass');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometermercurycoldfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerMercuryCold: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-mercury-cold');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometermercuryfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerMercury: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-mercury');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerwarmerfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerWarmer: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer-warmer');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thermometer: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thermometer');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsdayrainfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-day-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsdaysnowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-day-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsdayfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsnightrainfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-night-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsnightsnowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsNightSnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-night-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsnightfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsrainfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormssnowfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsSnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorms: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'thunderstorms');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'tornadofillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Tornado: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'tornado');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'umbrellafillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Umbrella: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'umbrella');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex1fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex1: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-1');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex10fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex10: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-10');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex11fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex11: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-11');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex2fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex2: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-2');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex3fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex3: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-3');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex4fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex4: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-4');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex5fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex5: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-5');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex6fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex6: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-6');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex7fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex7: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-7');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex8fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex8: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-8');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex9fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex9: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index-9');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindexfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'uv-index');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort0fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort0: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-0');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort1fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort1: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-1');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort10fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort10: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-10');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort11fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort11: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-11');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort12fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort12: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-12');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort2fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort2: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-2');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort3fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort3: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-3');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort4fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort4: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-4');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort5fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort5: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-5');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort6fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort6: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-6');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort7fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort7: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-7');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort8fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort8: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-8');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort9fillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort9: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind-beaufort-9');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Wind: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'wind');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windsockfillall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Windsock: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'fill', 'windsock');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cleardayfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'clear-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'clearnightfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'clear-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cloudyfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'cloudy');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'drizzlefilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Drizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fogfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Fog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hailfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Hail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayrainfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-day-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightrainfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-night-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'partly-cloudy-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'rainfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sleetfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'snowfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Snow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorm: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'thunderstorm');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'tornadofilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Tornado: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'tornado');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windfilldarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Wind: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'fill', 'wind');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'01dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '01d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'01nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '01n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'02dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '02d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'02nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '02n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'03dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '03d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'03nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '03n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'04dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '04d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'04nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '04n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'09dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '09d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'09nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '09n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'10dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '10d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'10nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '10n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'11dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorms: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '11d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'11nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorms: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '11n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'13dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '13d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'13nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '13n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'50dfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Mist: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '50d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'50nfillopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Mist: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'fill', '50n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'barometerlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Barometer: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'barometer');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'celsiuslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Celsius: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'celsius');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cleardaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'clear-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'clearnightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'clear-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cloudylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'cloudy');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'compasslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Compass: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'compass');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'drizzlelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Drizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustdaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const DustDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'dust-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustnightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const DustNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'dust-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustwindlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const DustWind: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'dust-wind');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'dustlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Dust: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'dust');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fahrenheitlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Fahrenheit: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'fahrenheit');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fallingstarslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const FallingStars: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'falling-stars');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fogdaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const FogDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'fog-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'fognightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const FogNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'fog-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'foglineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Fog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'haillineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Hail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hazedaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const HazeDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'haze-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hazenightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const HazeNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'haze-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hazelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Haze: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'haze');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'horizonlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Horizon: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'horizon');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'humiditylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Humidity: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'humidity');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'hurricanelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Hurricane: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'hurricane');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'lightningboltlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const LightningBolt: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'lightning-bolt');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'mistlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Mist: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'mist');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonfirstquarterlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonFirstQuarter: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-first-quarter');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonfulllineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonFull: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-full');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonlastquarterlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonLastQuarter: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-last-quarter');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonnewlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonNew: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-new');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaningcrescentlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaningCrescent: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-waning-crescent');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaninggibbouslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaningGibbous: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-waning-gibbous');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaxingcrescentlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaxingCrescent: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-waxing-crescent');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonwaxinggibbouslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const MoonWaxingGibbous: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moon-waxing-gibbous');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonriselineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Moonrise: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moonrise');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'moonsetlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Moonset: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'moonset');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'notavailablelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const NotAvailable: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'not-available');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'overcastdaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const OvercastDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'overcast-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'overcastnightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const OvercastNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'overcast-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'overcastlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Overcast: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'overcast');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaydrizzlelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayDrizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayfoglineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayFog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayhaillineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayHail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayhazelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayHaze: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-haze');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayrainlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaysleetlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaysmokelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySmoke: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-smoke');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaysnowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightdrizzlelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightDrizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightfoglineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightFog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynighthaillineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightHail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynighthazelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightHaze: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-haze');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightrainlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightsleetlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightSleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightsmokelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightSmoke: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-smoke');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightsnowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightSnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'partly-cloudy-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurehighaltlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureHighAlt: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'pressure-high-alt');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurehighlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureHigh: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'pressure-high');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurelowaltlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureLowAlt: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'pressure-low-alt');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'pressurelowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PressureLow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'pressure-low');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'rainlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'raindroplineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Raindrop: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'raindrop');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'raindropslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Raindrops: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'raindrops');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sleetlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'smokeparticleslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const SmokeParticles: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'smoke-particles');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'smokelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Smoke: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'smoke');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'snowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Snow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'snowflakelineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Snowflake: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'snowflake');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'solareclipselineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const SolarEclipse: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'solar-eclipse');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'starlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Star: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'star');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'starrynightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const StarryNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'starry-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sunriselineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sunrise: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'sunrise');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sunsetlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sunset: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'sunset');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometercelsiuslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerCelsius: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-celsius');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometercolderlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerColder: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-colder');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerfahrenheitlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerFahrenheit: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-fahrenheit');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerglasscelsiuslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerGlassCelsius: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-glass-celsius');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerglassfahrenheitlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerGlassFahrenheit: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-glass-fahrenheit');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerglasslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerGlass: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-glass');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometermercurycoldlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerMercuryCold: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-mercury-cold');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometermercurylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerMercury: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-mercury');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerwarmerlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThermometerWarmer: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer-warmer');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thermometerlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thermometer: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thermometer');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsdayrainlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-day-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsdaysnowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-day-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsdaylineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsnightrainlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-night-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsnightsnowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsNightSnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-night-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsnightlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormsrainlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormssnowlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ThunderstormsSnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms-snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormslineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorms: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'thunderstorms');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'tornadolineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Tornado: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'tornado');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'umbrellalineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Umbrella: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'umbrella');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex1lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex1: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-1');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex10lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex10: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-10');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex11lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex11: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-11');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex2lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex2: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-2');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex3lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex3: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-3');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex4lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex4: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-4');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex5lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex5: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-5');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex6lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex6: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-6');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex7lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex7: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-7');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex8lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex8: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-8');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindex9lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex9: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index-9');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'uvindexlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const UvIndex: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'uv-index');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort0lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort0: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-0');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort1lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort1: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-1');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort10lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort10: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-10');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort11lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort11: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-11');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort12lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort12: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-12');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort2lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort2: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-2');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort3lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort3: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-3');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort4lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort4: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-4');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort5lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort5: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-5');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort6lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort6: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-6');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort7lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort7: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-7');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort8lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort8: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-8');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windbeaufort9lineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const WindBeaufort9: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind-beaufort-9');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windlineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Wind: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'wind');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windsocklineall': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Windsock: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('all', 'line', 'windsock');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cleardaylinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'clear-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'clearnightlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'clear-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'cloudylinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'cloudy');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'drizzlelinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Drizzle: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'drizzle');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'foglinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Fog: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'fog');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'haillinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Hail: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'hail');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydayrainlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-day-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudydaylinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-day');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightrainlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-night-rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'partlycloudynightlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'partly-cloudy-night');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'rainlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'rain');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'sleetlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Sleet: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'sleet');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'snowlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Snow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'snow');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'thunderstormlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorm: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'thunderstorm');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'tornadolinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Tornado: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'tornado');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'windlinedarksky': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Wind: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('darksky', 'line', 'wind');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'01dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '01d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'01nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const ClearNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '01n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'02dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDay: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '02d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'02nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNight: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '02n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'03dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '03d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'03nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '03n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'04dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '04d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'04nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Cloudy: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '04n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'09dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '09d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'09nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Rain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '09n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'10dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDayRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '10d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'10nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyNightRain: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '10n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'11dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorms: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '11d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'11nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Thunderstorms: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '11n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'13dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '13d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'13nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const PartlyCloudyDaySnow: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '13n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'50dlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Mist: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '50d');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`,
	'50nlineopenweathermap': `import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';


export const Mist: React.FC = () => {
    const [icon, setIcon] = useState<string | undefined>();
  
    useEffect(() => {
      const getIcon = async () => {
        const data = await loadSvgStringAsync('openweathermap', 'line', '50n');
        setIcon(data);
      }
  
      getIcon();
    }, []);
  
    return icon 
      ? <img src={icon} alt="weather icon" /> 
      : <div>Loading...</div>;
}
`
}
