import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { iconMap } from 'react-weather-illustrations';
import { Accordion } from './accordion';

interface SidebarButtonProps {
    indent?: number;
}

interface SidebarVisibilityProps {
    isOpen?: boolean;
}

interface SidebarProps extends SidebarVisibilityProps {
    onClick: (id: string) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type DataType = Record<
    string,
    Record<
        string,
        Record<string, string>
    >
>;

const SidebarRoot = styled.div<SidebarVisibilityProps>`
    width: calc(20vw - 1rem);
    border-right: 1px solid #CCCCCC;
    height: calc(100vh - 4.8rem);
    overflow-y: auto;
    /* background: -webkit-linear-gradient(left, #fff 0%,#fff 97%,#ccc 100%); */

    @media only screen and (max-width: 600px) {
        position: absolute;
        display: ${ ({ isOpen }) => isOpen ? 'block' : 'none' };
        z-index: 100;
        width: 66vw;
        background: white;
        right: 0;
        border-left: 1px solid rgb(204, 204, 204);
        border-right: 0;
        height: calc(100vh - 3.5rem);
    }
`;

const SidebarButton = styled.div<SidebarButtonProps>`
    cursor: pointer;
    padding: 0.5rem 0;
    padding-left: ${ ({ indent }) => indent || 1}rem;

    &:hover {
        background: rgb(246, 249, 252);
    }
`;

const mappedIcons = iconMap as DataType;

const useOnClickOutside = (ref: React.RefObject<HTMLElement>, handler: (evt: Event) => void) => {
    useEffect(() => {
        const listener = (event: Event) => {
          if (!ref.current || ref.current.contains(event.target as Node)) return;
          handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    onClick,
    setIsOpen,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setIsOpen(false));

    return (
        <SidebarRoot
            isOpen={isOpen}
            ref={ref}
        >
            {
                Object.keys(mappedIcons).flatMap(iconSet => {
                    const typeData = mappedIcons[iconSet];

                    const types = Object.keys(typeData).flatMap(iconType => {
                        const namesData = typeData[iconType];
                        const names = Object.keys(namesData).map(name => (
                            <SidebarButton
                                key={`${iconSet}-${iconType}-${name}`}
                                indent={3}
                                onClick={() => onClick(`${name}${iconSet}${iconType}`.replace(/-/g, ''))}
                            >
                                { name }
                            </SidebarButton>
                        ));

                        const iconTypeButton = (
                            <SidebarButton
                                key={`${iconSet}-${iconType}`}
                                indent={2}
                            >
                                { iconType }
                            </SidebarButton>
                        );

                        return <Accordion header={iconTypeButton} body={names} />;
                    })

                    const iconSetButton = <SidebarButton key={iconSet}>{ iconSet }</SidebarButton>;
                    return <Accordion header={iconSetButton} body={types} />;
                })
            }
        </SidebarRoot>
    );
}
