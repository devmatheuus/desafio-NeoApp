import React, { createContext, useCallback, useContext, useState } from 'react';

import { IComic } from '../../types/IComicData';

interface ICartProvider {
  children: React.ReactNode;
}

interface IComicsInCart extends IComic {
  quantity: number;
}

interface ICartContext {
  comicsInCart: IComicsInCart[];
  addToCart: (comic: IComic) => void;
  removeFromCart: (comicId: number) => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export const CartProvider = ({ children }: ICartProvider) => {
  const [comicsInCart, setComicsInCart] = useState<IComicsInCart[]>([]);

  const addToCart = useCallback(
    (comic: IComic) => {
      const comicExists = comicsInCart.find((item) => item.id === comic.id);

      if (comicExists) {
        setComicsInCart((state) =>
          state.map((item) =>
            item.id === comic.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setComicsInCart((state) => [...state, { ...comic, quantity: 1 }]);
      }
    },
    [comicsInCart]
  );

  const removeFromCart = useCallback((comicId: number) => {
    setComicsInCart((state) => state.filter((item) => item.id !== comicId));
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        comicsInCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
