import styled from 'styled-components';

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 4px solid ${({ theme }) => theme.primary};
  flex-shrink: 0;
`;

export default Circle;
