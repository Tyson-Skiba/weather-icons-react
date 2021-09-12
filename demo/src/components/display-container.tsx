import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { CopyContent } from './copy-content';
import { Loader } from '../generated/suspense';
import { examples } from '../generated/suspense/examples';
interface DisplayContainerProps {
  importKey: string;
}
interface HeroProps {
  isCodeBlock?: boolean;
}

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

export const DisplayContainer: React.FC<DisplayContainerProps> = ({ importKey }) => {

  return (
    <DisplayContainerRoot>
      <Hero isCodeBlock>
        <SyntaxHighlighter
          language="typescript"
          style={tomorrow}
        >
          {examples[importKey]}
        </SyntaxHighlighter>
        <CopyContent text={examples[importKey]} />
      </Hero>
      <Hero>
        <Loader requestKey={importKey} /> 
      </Hero>
    </DisplayContainerRoot>
  )
}
