import styled from 'styled-components';
import { theme } from '../../theme';
import { CardItemTypes } from '../../AppTypes';

const linkColor = theme.colors.default;
const linkColorhover = theme.colors.defaultHover;

const Container = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Trebuchet MS';
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

const Link = styled.a<{ color: string }>`
  color: ${(props) => props.theme.colors.default};
  text-decoration: underline dashed ${(props) => props.color};
`;

const OutOfStock = styled.span`
  color: ${(props) => props.theme.colors.disableText};
`;

type P = {
  card: CardItemTypes;
  onClickHandler: (id: string) => void;
};

export const CardDesription = ({ card, onClickHandler }: P) => {
  const { shortDescription, state, filling } = card;
  const clickHandler = () => onClickHandler(card.id);
  return (
    <Container>
      <>
        {state === 'default' && (
          <>
            Чего сидишь? Порадуй котэ,{' '}
            <Link
              color={state.includes('default') ? linkColor : linkColorhover}
              href='#!'
              onClick={clickHandler}
            >
              купи
            </Link>
            .
          </>
        )}
        {state === 'selected' && shortDescription}
        {state === 'disable' && (
          <OutOfStock>Печалька, {filling} закончился.</OutOfStock>
        )}
      </>
    </Container>
  );
};
