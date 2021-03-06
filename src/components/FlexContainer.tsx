import styled from 'styled-components';

type P = {
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  flexWrap?: 'wrap' | 'wrap-reverse' | 'inherit';
  paddingBlock?: string;
  paddingInline?: string;
  marginBlock?: string;
  marginInline?: string;
  gap?: string;
  height?: string;
};

export const FlexContainer = styled.div<P>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'no-wrap'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin-block: ${({ marginBlock }) => marginBlock || 0};
  margin-inline: ${({ marginInline }) => marginInline || 0};
  padding-block: ${({ paddingBlock }) => paddingBlock || 0};
  padding-inline: ${({ paddingInline }) => paddingInline || 0};
  gap: ${({ gap }) => gap || 0};
  height: ${({ height }) => height || 'auto'};
`;
