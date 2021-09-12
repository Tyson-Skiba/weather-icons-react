import React from 'react';
import styled from 'styled-components';
import { iconMap } from 'react-weather-illustrations';
import { Accordion } from './accordion';

interface SidebarButtonProps {
    indent?: number;
}

interface SidebarProps {
    onClick: (id: string) => void;
}

type DataType = Record<
    string,
    Record<
        string,
        Record<string, string>
    >
>;

const SidebarRoot = styled.div`
    width: calc(20vw - 1rem);
    border-right: 1px solid #CCCCCC;
    height: calc(100vh - 4.8rem);
    overflow-y: auto;
    /* background: -webkit-linear-gradient(left, #fff 0%,#fff 97%,#ccc 100%); */
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

export const Sidebar: React.FC<SidebarProps> = ({ onClick }) => {

    return (
        <SidebarRoot>
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
