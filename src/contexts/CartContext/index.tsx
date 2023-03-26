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
  const [comicsInCart, setComicsInCart] = useState<IComicsInCart[]>(() => {
    const comicsInStorage = localStorage.getItem('@comics');

    if (comicsInStorage) {
      return JSON.parse(comicsInStorage);
    }

    return [];
  });

  const addToCart = useCallback(
    (comic: IComic & { quantity: number }) => {
      const comicExists = comicsInCart.find((item) => item.id === comic.id);

      if (comicExists) {
        setComicsInCart((state) => {
          const newState = state.map((item) =>
            item.id === comic.id
              ? { ...item, quantity: item.quantity + comic.quantity }
              : item
          );

          localStorage.setItem('@comics', JSON.stringify(newState));

          return newState;
        });
      } else {
        setComicsInCart((state) => {
          const newState = [...state, { ...comic, quantity: comic.quantity }];

          localStorage.setItem('@comics', JSON.stringify(newState));

          return newState;
        });
      }
    },

    [comicsInCart]
  );

  const removeFromCart = useCallback((comicId: number) => {
    setComicsInCart((state) => {
      const newState = state.filter((item) => item.id !== comicId);
      localStorage.setItem('@comics', JSON.stringify(newState));

      return newState;
    });
  }, []);

  const editComicQuantity = useCallback((comicId: number, quantity: number) => {
    setComicsInCart((state) => {
      const newState = state.map((item) =>
        item.id === comicId ? { ...item, quantity } : item
      );

      localStorage.setItem('@comics', JSON.stringify(newState));
      return newState;
    });
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
