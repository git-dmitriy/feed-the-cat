export const getColor = (state: string, isHover: boolean) => {
  if (isHover) {
    return state + 'Hover';
  }

  return state;
};
