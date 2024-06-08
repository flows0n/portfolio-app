import styled from 'styled-components';
import React from 'react';
import Circle from './Circle';

interface IWorkPlaceProps {
  name: string;
  position: string;
  years: string;
}

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const Name = styled.p`
  font-size: 24px;
`;

const Position = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

const Years = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
`;

const WorkPlace = ({ name, position, years }: IWorkPlaceProps) => {
  return (
    <Wrapper>
      <Circle />
      <TextWrapper>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Years>{years}</Years>
      </TextWrapper>
    </Wrapper>
  );
};

export default WorkPlace;
