import React from 'react';
import styled from 'styled-components';
import { Github } from '../svg/github';
import { Npm } from '../svg/npm';

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
`;

const LinkContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    width: 5rem;
`;

export const Header: React.FC = () => (
    <HeaderRoot>
        <Title>
            weather-icons-react
        </Title>
        <LinkContainer>
            <Npm size="2.5rem" />
            <Github size="2rem" />
        </LinkContainer>
    </HeaderRoot>
)
