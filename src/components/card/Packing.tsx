import styled from 'styled-components';
import { getColor } from '../../helpers/getColor';

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
  color: ${(props) => props.theme.colors.text};
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors[props.color]};
`;

const Measure = styled.span`
  display: block;
  font-size: 21px;
`;

type P = {
  state: string;
  isHover: boolean;
  children: React.ReactNode;
};

export const Packing = ({ state, isHover, children }: P) => {
  const color = getColor(state, isHover);

  return (
    <Circle color={color && color}>
      {children}
      <Measure>кг</Measure>
    </Circle>
  );
};
