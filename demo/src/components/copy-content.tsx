import React, { useState } from 'react';
import styled from 'styled-components';
import { Check } from '../svg/check';

import { Clipboard } from '../svg/clipboard';
import { Cross } from '../svg/cross';
import { Loader } from '../svg/loader';
import { copyTextToClipboard } from '../utils/copy-to-clipboard';

interface CopyContentProps {
    text: string;
}

interface Backgrounds {
    background: string;
    hoverBackground: string;
}

interface CopyContainerProps {
    config: Backgrounds;
}

enum Status {
    AtRest = 'rest',
    Copying = 'copy',
    Success = 'success',
    Error = 'error',
}

type StatusMap = {
    [P in Status]: Backgrounds;
}

const CopyContainer = styled.div<CopyContainerProps>`
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 0.5rem;
    background: ${ ({ config }) => config.background };
    transition: 500ms;

    &:hover {
        background: ${ ({ config }) => config.hoverBackground };
    }
`;

const statusMap: StatusMap = {
    rest: {
        background: 'transparent',
        hoverBackground: 'rgba(255, 255, 255, 0.25)',
    },
    copy: {
        background: 'transparent',
        hoverBackground: 'rgba(255, 255, 255, 0.25)',
    },
    success: {
        background: '#4BB543',
        hoverBackground: '#4BB543',
    },
    error: {
        background: '#CC0000',
        hoverBackground: '#CC0000',
    },
}

const svgProps = {
    colour: "#FFFFFF",
    size: "1rem",
}

export const CopyContent: React.FC<CopyContentProps> = ({ text }) => {
    const [status, setStatus] = useState<Status>(Status.AtRest);

    const onClick = () => {
        setStatus(Status.Copying);

        copyTextToClipboard(text, success => {
            setStatus(success ? Status.Success : Status.Error);

            setTimeout(() => {
                setStatus(Status.AtRest);
            }, 2500);
        })
    }

    const config = statusMap[status];

    if (status === Status.Copying) return <CopyContainer config={config}><Loader {...svgProps} /></CopyContainer>;
    if (status === Status.Error) return <CopyContainer config={config}><Cross {...svgProps} /></CopyContainer>;
    if (status === Status.Success) return <CopyContainer config={config}><Check {...svgProps} /></CopyContainer>;

    return (
        <CopyContainer
            config={config}
            onClick={onClick}
        >
            <Clipboard {...svgProps} />
        </CopyContainer>
    )
}
