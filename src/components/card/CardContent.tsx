import styled from 'styled-components';
import { CardItemTypes } from '../../AppTypes';
import { Packing } from './Packing';
import { Portions } from './Portions';
import { Present } from './Present';

const Card = styled.article<{ isDisabled: boolean }>`
  position: relative;
  padding: 19px 45px 0 45px;
  block-size: calc(100% - 15px);
  background: url(/cat.png) center bottom no-repeat;
  font-family: 'Trebuchet MS', sans-serif;
  text-overflow: ellipsis;
  user-select: none;
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};

  &::before {
    position: absolute;
    ${(props) => (props.isDisabled ? "content:''" : null)};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Slogan = styled.p`
  color: ${(props) => props.theme.colors.slogan};
  text-overflow: ellipsis;
  margin: 0;
`;

const SloganActive = styled(Slogan)`
  color: ${(props) => props.theme.colors.selectHoverSlogan};
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xl2};
  text-overflow: ellipsis;
  font-weight: bold;
  margin-block-start: 5px;
  margin-block-end: 14px;
`;

const Filling = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.md};
`;

type P = {
  card: CardItemTypes;
  onMouseLeaveHandler: (id: string) => void;
  onClickHandler: (id: string) => void;
};

export const CardContent = ({
  card,
  onMouseLeaveHandler,
  onClickHandler,
}: P) => {
  const { state, filling, portions, miceAsgift, packing, isHover } = card;
  const isDisabled = state === 'disable';

  const clickHandler = () => onClickHandler(card.id);
  const mouseLeaveHandler = () => onMouseLeaveHandler(card.id);

  return (
    <Card
      isDisabled={isDisabled}
      onClick={clickHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {state === 'selected' ? (
        <SloganActive>Котэ не одобряет?</SloganActive>
      ) : (
        <Slogan>Сказочное заморское яство</Slogan>
      )}

      <Heading>
        Нямушка
        <Filling>{filling}</Filling>
      </Heading>

      <Portions quantity={portions} />
      <Present quantity={miceAsgift} />

      <Packing state={state} isHover={isHover}>
        {packing}
      </Packing>
    </Card>
  );
};
