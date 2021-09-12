import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionProps {
    header: React.ReactNode;
    body: React.ReactNode;
}

interface AccordionBodyProps {
    isOpen: boolean;
}

const AccordionRoot = styled.div`

`;

const AccordionHeader = styled.div`

`;

const AccordionBody = styled.div<AccordionBodyProps>`
    display: ${ ({ isOpen }) => isOpen ? 'unset' : 'none' };
`;

export const Accordion: React.FC<AccordionProps> = ({
    header,
    body,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccordionRoot>
            <AccordionHeader onClick={() => setIsOpen(state => !state)}>
                { header }
            </AccordionHeader>
            <AccordionBody isOpen={isOpen}>
                { body }
            </AccordionBody>
        </AccordionRoot>
    )
}
