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

export const Portions = ({ quantity }: P) => {
  return (
    <Container>
      <Quantity>{quantity}</Quantity> порций
    </Container>
  );
};
