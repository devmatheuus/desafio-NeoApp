import { IComicsInCart } from '../types/IComicData';

export const getQuantityOfItemsOnCart = (
  comicsInCart: IComicsInCart[]
): number => {
  let itensOnCart = 0;

  if (comicsInCart.length > 0) {
    const itens = comicsInCart.map(({ quantity }) => quantity);
    itensOnCart = itens.reduce((curr, acc) => curr + acc, 0);
  }

  return itensOnCart;
};
