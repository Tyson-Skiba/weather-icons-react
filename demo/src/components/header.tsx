import React from 'react';
import styled from 'styled-components';
import { Cross } from '../svg/cross';
import { Github } from '../svg/github';
import { Menu } from '../svg/menu-open';
import { Npm } from '../svg/npm';

interface HeaderProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

const HeaderRoot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    border-bottom: 1px solid #CCCCCC;
`;

const Title = styled.div`
    font-size: 1.5rem;
    margin-left: 1rem;
    background: #602F6B;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #FFFFFF;
    font-weight: 700;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
    }
`;

const LinkContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    width: 5rem;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    cursor: pointer;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    display: none;

    @media only screen and (max-width: 600px) {
        display: flex;
    }
`;

export const Header: React.FC<HeaderProps> = ({
    isOpen,
    setIsOpen,
}) => (
    <HeaderRoot>
        <Title>
            weather-icons-react
        </Title>
        <LinkContainer>
            <Npm size="2.5rem" onClick={() => window.open('https://www.npmjs.com/package/react-weather-illustrations', '_blank')} />
            <Github size="2rem" onClick={() => window.open('https://github.com/Tyson-Skiba/weather-icons-react', '_blank')} />
        </LinkContainer>
        <MobileMenu>
            { isOpen
                ? <Cross size="1.25rem" onClick={() => setIsOpen(state => !state)} />
                : <Menu size="1.25rem" onClick={() => setIsOpen(state => !state)} />
            }
        </MobileMenu>
    </HeaderRoot>
)
