import styled from 'styled-components';
import { theme } from '../theme';

const Circle = styled.p<{ color: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  inset-inline-end: 13px;
  inset-block-end: 14px;
  inline-size: 80px;
  block-size: 80px;
  font-size: 42px;
  margin: 0;
  color: ${theme.colors.text};
  border-radius: 100%;
  background-color: ${(props) => props.color || theme.colors.default};
`;

const Measure = styled.span`
  display: block;
  font-size: 21px;
`;

type P = {
  color?: string;
  children: React.ReactNode;
};

export const Packing = ({ color = '', children }: P) => {
  return (
    <Circle color={color && color}>
      {children}
      <Measure>кг</Measure>
    </Circle>
  );
};
