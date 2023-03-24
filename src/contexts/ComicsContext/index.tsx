import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import api from '../../services/api';
import { IComic, IComicData } from '../../types/IComicData';
import { getComicsRequestParams } from '../../utils/getComicsRequestParams';

interface IComicsProvider {
  children: React.ReactNode;
}

interface IComicsContext {
  comics: IComicData;
  setComics: React.Dispatch<React.SetStateAction<IComicData>>;
  loadComics: () => Promise<void>;
  loadMoreComics: () => Promise<void>;
  isLoading: boolean;
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
  const [offset, setOffset] = useState<number>(160);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const comicsById = useMemo(() => new Map<number, IComic>(), []);

  if (comics.results) {
    comics.results.forEach((comic) => {
      comicsById.set(comic.id, comic);
    });
  }

  const loadComics = useCallback(async () => {
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await api.get<IComicsResponse>(
        '/comics',
        getComicsRequestParams(120)
      );

      setComics((prevState) => ({
        ...prevState,
        ...data,
      }));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  }, [setComics]);

  const loadMoreComics = useCallback(async () => {
    setIsLoading(true);

    try {
      const {
        data: { data },
      } = await api.get<IComicsResponse>(
        '/comics',
        getComicsRequestParams(offset)
      );

      data.results.forEach((comic) => {
        if (!comicsById.has(comic.id)) {
          comicsById.set(comic.id, comic);
        }
      });

      const newComics = Array.from(comicsById.values());

      setComics((prevState) => ({
        ...prevState,
        results: [...newComics],
      }));

      setOffset((prevOffset) => prevOffset + 20);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  }, [setComics, setOffset, offset, comicsById]);

  return (
    <ComicsContext.Provider
      value={{ loadComics, comics, setComics, loadMoreComics, isLoading }}
    >
      {children}
    </ComicsContext.Provider>
  );
};
