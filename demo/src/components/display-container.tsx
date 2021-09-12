import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { repositories } from 'weather-icons-react';
import { CopyContent } from './copy-content';

interface HeroProps {
    isCodeBlock?: boolean;
}

const demoCode = `import React from 'react';
import { repositories } from 'weather-icons-react';

const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const Demo: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)
`;

const DisplayContainerRoot = styled.div`
    display: flex;
    background: rgb(246, 249, 252);
`;

const Hero = styled.div<HeroProps>`
    display: flex;
    position: relative;
    width: calc(40vw - 1rem);
    height: calc(100vh - 7rem);
    border-radius: 1rem;
    border: 1px solid ${ ({ isCodeBlock }) => isCodeBlock ? 'rgb(45, 45, 45)' : '#CFD9DE' };
    background: ${ ({ isCodeBlock }) => isCodeBlock ? 'rgb(45, 45, 45)' : '#FFFFFF' };
    box-shadow: 0px 3px 1px -2px rgb(51 65 85/0.025),0px 2px 2px 0px rgb(51 65 85/0.035),0px 1px 5px 0px rgb(51 65 85/0.03);
    margin: 1rem;
    margin-right: ${ ({ isCodeBlock }) => isCodeBlock ? '0rem' : '1rem' };
    margin-left: 1.5rem;
    padding: 1rem;
`;

const Icon: React.FC = () => {
  const svg = repositories.fill.darksky.read('clear-night');
  return <img src={svg} alt="weather icon" />;
}

export const Demo: React.FC = () => (
  <React.Suspense fallback={<div>Loading</div>}>
    <Icon />
  </React.Suspense>
)

export const DisplayContainer: React.FC = () => {

    return (
        <DisplayContainerRoot>
            <Hero isCodeBlock>
                <SyntaxHighlighter
                    language="typescript"
                    style={tomorrow}
                >
                    {demoCode}
                </SyntaxHighlighter>
                <CopyContent text={demoCode} />
            </Hero>
            <Hero>
                <Demo />
            </Hero>
        </DisplayContainerRoot>
    )
}
