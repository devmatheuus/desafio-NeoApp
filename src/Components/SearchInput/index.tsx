import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useComics } from '../../contexts/ComicsContext';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const SearchInput: React.FC = () => {
  const { comics, setFilteredComics, search, setSearch } = useComics();

  const handleSearch = () => {
    const filteredComics = comics.results.filter((comic) => {
      return comic.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredComics({ ...comics, results: filteredComics });
  };

  return (
    <Styled.SearchInputContainer>
      <AiOutlineSearch color={theme.colors.black} />
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch();
        }}
        placeholder="Look for comics"
      />
    </Styled.SearchInputContainer>
  );
};
