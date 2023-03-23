import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../../services/api';
import { IComicData } from '../../types/IComicData';

interface IComicsProvider {
  children: React.ReactNode;
}

interface IComicsContext {
  comics: IComicData;
  setComics: React.Dispatch<React.SetStateAction<IComicData>>;
  loadComics: () => Promise<void>;
}

interface IComicsResponse {
  data: IComicData;
}

export const ComicsContext = createContext<IComicsContext>(
  {} as IComicsContext
);

export const useComics = () => {
  const context = useContext(ComicsContext);

  return context;
};

export const ComicsProvider: React.FC<IComicsProvider> = ({
  children,
}: IComicsProvider) => {
  const [comics, setComics] = useState<IComicData>({} as IComicData);

  const loadComics = useCallback(async () => {
    try {
      const response = await api.get<IComicsResponse>('/comics', {
        params: {
          format: 'comic',
          formatType: 'comic',
          ts: 1,
          apikey: '49bd00e234f978ceac45ead9554fcba7',
          hash: '5255f3a08a0292054a16c447cb4c28e1',
        },
      });

      setComics((prevState) => ({
        ...prevState,
        ...response.data.data,
      }));
    } catch (error) {
      console.log(error);
    }
  }, [setComics]);

  return (
    <ComicsContext.Provider value={{ loadComics, comics, setComics }}>
      {children}
    </ComicsContext.Provider>
  );
};
