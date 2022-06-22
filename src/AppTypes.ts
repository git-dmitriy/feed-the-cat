export type CardItemTypes = {
  id: string;
  state: 'default' | 'selected' | 'disable';
  isHover: boolean;
  filling: string;
  portions: number;
  miceAsgift: number;
  packing: string;
  shortDescription: string;
};


export type ThemeTypes = {
  colors: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: string;
  };
};