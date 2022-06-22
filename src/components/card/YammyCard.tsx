import { CardContent } from '../../components/card/CardContent';
import { CutFrame } from '../../components/card/CutFrame';
import { CardDesription } from '../../components/card/CardDescription';
import { FlexContainer } from '../FlexContainer';
import { CardItemTypes } from '../../AppTypes';

type P = {
  card: CardItemTypes;
  onMouseLeaveHandler: (id: string) => void;
  onClickHandler: (id: string) => void;
};

export const YammyCard = ({ card, onMouseLeaveHandler, onClickHandler }: P) => {
  return (
    <>
      <FlexContainer direction='column' marginInline='2vw'>
        <CutFrame state={card.state} isHover={card.isHover}>
          <CardContent
            card={card}
            onClickHandler={onClickHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
          />
        </CutFrame>
        <CardDesription card={card} onClickHandler={onClickHandler} />
      </FlexContainer>
    </>
  );
};
