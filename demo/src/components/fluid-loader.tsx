import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loader } from '../svg/loader';

interface FluidLoaderProps {
    colour?: string;
    isSmall?: boolean;
    disableDefer?: boolean;
}

const InnerLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const FluidLoader: React.FC<FluidLoaderProps> = ({
    isSmall,
    colour,
    disableDefer,
}) => {
    const [hasDefered, setHasDeffered] = useState<boolean>(!!disableDefer);

    useEffect(() => {
        if (hasDefered) return;

        /* Don't flash the laoder if its going to be rapidly replaced */
        setTimeout(() => {
            setHasDeffered(true);
        }, 400);
// eslint-disable-next-line
    }, []);

    if (!hasDefered) return null;

    return (
        <InnerLoader>
            <Loader
                colour={ colour ?? '#602F6B' }
                size={isSmall ? '2rem' : '5rem'}
            />
        </InnerLoader>
    )
};
