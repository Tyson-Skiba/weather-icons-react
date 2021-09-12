import React from 'react';
import styled from 'styled-components';
import SwitchSelector from "react-switch-selector";

export enum SwitchValue {
    Suspense = 'suspense',
    FunctionalComponent = 'fc',
    Loadable = 'loadable',
}

interface SwitcherProps {
    onChange: (key: SwitchValue) => void;
}

const SwitcherRoot = styled.div`
    position: absolute;
    height: 3rem;
    bottom: 0.5rem;
    right: 0.5rem;
    background: white;
    border-radius: 1rem;
    left: 0.5rem;
`;

const options = [
    {
        label: "Functional",
        value: SwitchValue.FunctionalComponent,
        selectedBackgroundColor: "#f5b33a",
        fontColor: "#ea9c0d"
    },
    {
        label: "Suspense",
        value: SwitchValue.Suspense,
        selectedBackgroundColor: "#5DD490",
        fontColor: "#5DD490"
    },
    {
        label: "Loadable",
        value: SwitchValue.Loadable,
        selectedBackgroundColor: "#8560f7",
        fontColor: "#8560f7"
    }
];

export const Switcher: React.FC<SwitcherProps> = ({
    onChange,
}) => (
    <SwitcherRoot>
        <SwitchSelector
            onChange={value => onChange(value as SwitchValue)}
            options={options}
            initialSelectedIndex={1}
            wrapperBorderRadius={10}
            optionBorderRadius={10}
            border="1px solid #E6E6E6"
        />
    </SwitcherRoot>
)
