import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

export const Cmpthunderstormsdaysnowlineall: React.FC = () => {
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
      : <FluidLoader />;
}