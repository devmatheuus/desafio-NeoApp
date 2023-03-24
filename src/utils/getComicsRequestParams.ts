interface ComicParams {
  params: {
    offset?: number;
    format: 'comic';
    limit: number;
    formatType: 'comic';
    ts: number;
    apikey: string;
    hash: string;
  };
}

export const getComicsRequestParams = (offset?: number): ComicParams => ({
  params: {
    offset: offset ? offset : 0,
    format: 'comic',
    limit: 40,
    formatType: 'comic',
    ts: 1,
    apikey: '49bd00e234f978ceac45ead9554fcba7',
    hash: '5255f3a08a0292054a16c447cb4c28e1',
  },
});
