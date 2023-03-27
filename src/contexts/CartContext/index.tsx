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
  addCoupon: (coupon: string) => void;
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
    (
      comic: IComic & {
        quantity: number;
        rare?: boolean;
      }
    ) => {
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

  const addCoupon = useCallback(
    (coupon: string) => {
      console.log('chegando');
      switch (coupon) {
        case 'RARE15':
          comicsInCart.some((comic) => {
            if (!comic.rare) {
              return false;
            }
          });

          comicsInCart.map((comic) => {
            if (comic.rare && !('withDiscount' in comic)) {
              setComicsInCart((state) => {
                const newState = state.map((comic) => {
                  return {
                    ...comic,
                    prices: comic.prices.map((price) => {
                      return {
                        ...price,
                        price: Math.round(price.price * 0.15),
                      };
                    }),
                    withDiscount: true,
                  };
                });
                localStorage.setItem('@comics', JSON.stringify(newState));
                return newState;
              });
            }
          });
          break;

          comicsInCart.map((comic) => {
            if (!comic.rare) {
              comic.prices[0].price = comic.prices[0].price * 0.25;
            }
          });

          break;

        case 'COMMON25':
          comicsInCart.some((comic) => {
            if (comic.rare) {
              return false;
            }
          });

          comicsInCart.map((comic) => {
            if (!comic.rare && !('withDiscount' in comic)) {
              setComicsInCart((state) => {
                const newState = state.map((comic) => {
                  return {
                    ...comic,
                    prices: comic.prices.map((price) => {
                      return {
                        ...price,
                        price: Math.round(price.price * 0.25),
                      };
                    }),
                    withDiscount: true,
                  };
                });
                localStorage.setItem('@comics', JSON.stringify(newState));
                return newState;
              });
            }
          });
          break;

        default:
          break;
      }
    },
    [comicsInCart]
  );

  return (
    <CartContext.Provider
      value={{
        addCoupon,
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
