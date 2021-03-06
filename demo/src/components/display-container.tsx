import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { CopyContent } from './copy-content';
import { Loader as FcLoader } from '../generated/fc';
import { Loader as SuspenseLoader } from '../generated/suspense';
import { Loader as LoadableLoader } from '../generated/loadable';
import { examples as fcExamples } from '../generated/fc/examples';
import { examples as suspenseExamples } from '../generated/suspense/examples';
import { examples as loadableExamples } from '../generated/loadable/examples';
import { Switcher, SwitchValue } from './switcher';

interface DisplayContainerProps {
  importKey: string;
}
interface HeroProps {
  isCodeBlock?: boolean;
}

interface LoaderProps {
  requestKey: string;
}

type LoaderMap = {
  [P in SwitchValue]: {
    Loader: React.FC<LoaderProps>,
    examples: Record<string, string>
  }
}

const DisplayContainerRoot = styled.div`
  display: flex;
  background: rgb(246, 249, 252);

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    overflow: hidden;
  }
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

  @media only screen and (max-width: 600px) {
    width: calc(100vw - 3rem);
    margin-right: 1.5rem;
    height: calc(50vh - 4rem);
    margin-bottom: ${ ({ isCodeBlock }) => isCodeBlock ? '1rem' : 'unset' };
  }
`;

const loaderMap: LoaderMap = {
  suspense: {
    Loader: SuspenseLoader,
    examples: suspenseExamples,
  },
  fc: {
    Loader: FcLoader,
    examples: fcExamples,
  },
  loadable: {
    Loader: LoadableLoader,
    examples: loadableExamples,
  }
}

export const DisplayContainer: React.FC<DisplayContainerProps> = ({ importKey }) => {
  const [{ examples, Loader }, setLoaders] = useState(loaderMap['suspense']);

  const onChange = (value: SwitchValue) => setLoaders(loaderMap[value]);
  
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
        <Switcher onChange={onChange}/>
      </Hero>
      <Hero>
        <Loader requestKey={importKey} /> 
      </Hero>
    </DisplayContainerRoot>
  )
}
