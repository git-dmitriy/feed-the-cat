import { CardItemTypes } from './AppTypes';
export let data: CardItemTypes[];

data = [
  {
    id: '1',
    state: 'default',
    isHover: false,
    filling: 'с фуа-гра',
    portions: 10,
    miceAsgift: 1,
    packing: '0,5',
    shortDescription: 'Печень утки разварная с артишоками.',
  },
  {
    id: '2',
    state: 'default',
    isHover: false,
    filling: 'с рыбой',
    portions: 40,
    miceAsgift: 2,
    packing: '2',
    shortDescription: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: '3',
    state: 'disable',
    isHover: false,
    filling: 'с курой',
    portions: 100,
    miceAsgift: 5,
    packing: '5',
    shortDescription: 'Филе из цыплят с трюфелями в бульоне.',
  },
];
