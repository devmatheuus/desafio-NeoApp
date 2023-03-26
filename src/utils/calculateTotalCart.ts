import { IComicsInCart } from '../types/IComicData';
import { numberFormatter } from './numberFormmater';

export const calculateTotalCart = (comicsInCart: IComicsInCart[]) => {
  const total = comicsInCart.reduce((acc, item) => {
    return (acc += item.prices[0].price * item.quantity);
  }, 0);

  return numberFormatter(total);
};
