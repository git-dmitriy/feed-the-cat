import styled from 'styled-components';

const Container = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: gray;
  margin: 0;
`;

const Quantity = styled.span`
  font-weight: bold;
`;

type P = {
  quantity: number;
};

export const Present = ({ quantity }: P) => {
  let portion;

  if (quantity === 1) {
    portion = `мышь в подарок`;
  } else if (quantity > 1 && quantity < 5) {
    portion = 'мыши в подарок';
  } else if (quantity >= 5) {
    portion = (
      <>
        мышей в подарок <br />
        заказчик доволен
      </>
    );
  }

  return (
    <Container>
      <Quantity>{quantity}</Quantity> {portion}
    </Container>
  );
};
