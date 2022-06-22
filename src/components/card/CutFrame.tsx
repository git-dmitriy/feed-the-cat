import styled from 'styled-components';
import { getColor } from '../../helpers/getColor';
import { theme } from '../../theme';

const Border = styled.div<{ color: string }>`
  position: relative;
  inline-size: 320px;
  block-size: 480px;
  border-radius: 12px;
  background-color: ${(props) => theme.colors[props.color]};
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
`;

const BorderInner = styled.div`
  position: absolute;
  inset-block-start: 4px;
  inset-inline-start: 4px;
  inline-size: 312px;
  block-size: 472px;
  overflow: hidden;
  background-color: #f2f2f2;
  border-radius: 10px;
  clip-path: polygon(14.7% 0, 100% 0, 100% 100%, 0 100%, 0 9.7%);
`;

type P = {
  state: string;
  isHover: boolean;
  children: React.ReactNode;
};

export const CutFrame = ({ state, isHover, children }: P) => {
  const color = getColor(state, isHover);

  return (
    <Border color={color}>
      <BorderInner>{children}</BorderInner>
    </Border>
  );
};
