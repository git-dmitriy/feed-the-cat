import { FlexContainer } from './components/FlexContainer';
import { Tagline } from './components/Tagline';
import { data } from './data';
import { YammyCard } from './components/card/YammyCard';
import { useState } from 'react';

function App() {
  const [appData, setAppData] = useState([...data]);

  const onMouseLeaveHandler = (id: string) => {
    const cards = appData.map((card) => {
      let isHover = card.isHover;
      if (card.id === id && card.state !== 'disable') {
        isHover = !card.isHover;
      } else if (card.isHover === true) {
        isHover = false;
      }
      return { ...card, isHover };
    });

    setAppData(cards);
  };

  const onClickHandler = (id: string) => {
    const cards = appData.map((card) => {
      let state = card.state;
      if (card.id === id) {
        if (card.state === 'default') {
          state = 'selected';
        } else if (card.state === 'selected') {
          state = 'default';
        }
      }
      return { ...card, state };
    });

    setAppData(cards);
  };

  return (
    <>
      <Tagline>Ты сегодня покормил кота?</Tagline>

      <FlexContainer alignItems='center' flexWrap='wrap'>
        {appData.map((card) => (
          <YammyCard
            key={card.id}
            card={card}
            onClickHandler={onClickHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
          />
        ))}
      </FlexContainer>
    </>
  );
}

export default App;
