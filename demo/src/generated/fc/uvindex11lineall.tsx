import React, { useState, useEffect } from 'react';
import { loadSvgStringAsync } from 'react-weather-illustrations';
import { FluidLoader } from '../../components/fluid-loader';

export const Cmpuvindex11lineall: React.FC = () => {
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
      : <FluidLoader />;
}
