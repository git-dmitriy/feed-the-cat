import styled from 'styled-components';
import { theme } from '../../theme';

const Border = styled.div<{ color: string }>`
  position: relative;
  inline-size: 320px;
  block-size: 480px;
  border-radius: 12px;
  background-color: ${(props) => props.color || theme.colors.default};
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
  children: React.ReactNode;
  color?: string;
};

export const CutFrame = ({ color = '', children }: P) => {
  return (
    <Border color={color}>
      <BorderInner>{children}</BorderInner>
    </Border>
  );
};
