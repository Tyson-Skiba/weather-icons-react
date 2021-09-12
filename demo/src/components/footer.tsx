import React from 'react';
import styled from 'styled-components';

const FooterRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.3rem;
    width: 100%;
    border-top: 1px solid #CCCCCC;
    color: #CCCCCC;
    line-height: 8rem;
    font-size: 0.5rem;
    overflow: hidden;
`;

const BigDot = styled.span`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1rem;
`;

export const Footer: React.FC = () => <FooterRoot>•<BigDot>•</BigDot>•</FooterRoot>;
