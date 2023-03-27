// eslint-disable-next-line prettier/prettier
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import api from '../../services/api';
import { IComic, IComicData } from '../../types/IComicData';
import { getComicsRequestParams } from '../../utils/getComicsRequestParams';

interface IComicsProvider {
  children: React.ReactNode;
}

interface IComicsContext {
  comics: IComicData;
  setComics: React.Dispatch<React.SetStateAction<IComicData>>;
  comic: IComicData;
  setComic: React.Dispatch<React.SetStateAction<IComicData>>;
  loadOneComic: (comicId: string) => Promise<void>;
  loadComics: () => Promise<void>;
  isLoading: boolean;
  filteredComics: IComicData;
  setFilteredComics: React.Dispatch<React.SetStateAction<IComicData>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
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
  const [comic, setComic] = useState<IComicData>({} as IComicData);
  const [filteredComics, setFilteredComics] = useState<IComicData>(
    {} as IComicData
  );
  const [offset, setOffset] = useState<number>(120);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const comicsById = useMemo(() => new Map<number, IComic>(), []);

  if (comics.results) {
    comics.results.forEach((comic) => {
      comicsById.set(comic.id, comic);
    });
  }

  const loadOneComic = useCallback(
    async (comicId: string) => {
      setIsLoading(true);
      try {
        const {
          data: { data },
        } = await api.get<IComicsResponse>(
          `/comics/${comicId}`,
          getComicsRequestParams(offset)
        );

        setComic((prevState) => ({
          ...prevState,
          ...data,
        }));

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.log(error);
      }
    },
    [offset]
  );

  const loadComics = useCallback(async () => {
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

      const totalComics = newComics.length;
      const numRareComics = Math.floor(totalComics * 0.1);

      const rareComicIndices: number[] = [];

      for (let i = 2; i < numRareComics; i++) {
        rareComicIndices.push(Math.floor(Math.random() * totalComics));
      }

      const comicsWithRare = newComics.map((comic, index) => {
        if (rareComicIndices.includes(index)) {
          return { ...comic, rare: true };
        }
        return comic;
      });

      setComics((prevState) => ({
        ...prevState,
        results: comicsWithRare,
      }));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  }, [offset, comicsById]);

  return (
    <ComicsContext.Provider
      value={{
        comics,
        setComics,
        loadComics,
        isLoading,
        filteredComics,
        setFilteredComics,
        search,
        setSearch,
        comic,
        setComic,
        loadOneComic,
        setOffset,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};
