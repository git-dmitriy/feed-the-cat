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
    <div>
      <p>feed the cat .__.</p>
    </div>
  );
}

export default App;
