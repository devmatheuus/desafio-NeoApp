import React, { createContext, useCallback, useContext, useState } from 'react';

import { IComic, IComicsInCart } from '../../types/IComicData';

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartContext {
  comicsInCart: IComicsInCart[];
  addToCart: (comic: IComic & { quantity: number }) => void;
  removeFromCart: (comicId: number) => void;
  editComicQuantity: (comicId: number, quantity: number) => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

export const CartProvider = ({ children }: ICartProvider) => {
  const [comicsInCart, setComicsInCart] = useState<IComicsInCart[]>([]);

  const addToCart = useCallback(
    (comic: IComic & { quantity: number }) => {
      const comicExists = comicsInCart.find((item) => item.id === comic.id);

      if (comicExists) {
        setComicsInCart((state) =>
          state.map((item) =>
            item.id === comic.id
              ? { ...item, quantity: item.quantity + comic.quantity }
              : item
          )
        );
      } else {
        setComicsInCart((state) => [
          ...state,
          { ...comic, quantity: comic.quantity },
        ]);
      }
    },
    [comicsInCart]
  );

  const removeFromCart = useCallback((comicId: number) => {
    setComicsInCart((state) => state.filter((item) => item.id !== comicId));
  }, []);

  const editComicQuantity = useCallback((comicId: number, quantity: number) => {
    setComicsInCart((state) =>
      state.map((item) => (item.id === comicId ? { ...item, quantity } : item))
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        editComicQuantity,
        addToCart,
        comicsInCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
