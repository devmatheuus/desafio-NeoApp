export interface IComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IComic[];
}

export interface IComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: ITextObject[];
  resourceURI: string;
  urls: IUrl[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: IVariant[];
  collections: ICollections[];
  collectedIssues: ICollectedIssues[];
  dates: IDateObject[];
  prices: IPrice[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: IImages[];
  creators: {
    available: number;
    collectionURI: string;
    items: ICreator[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: ICharacter[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: IStory[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: IItems[];
    returned: number;
  };
}

interface ITextObject {
  type: string;
  language: string;
  text: string;
}

interface IUrl {
  type: string;
  url: string;
}

interface IDateObject {
  type: string;
  date: string;
}

interface IPrice {
  type: string;
  price: number;
}

interface ICreator {
  resourceURI: string;
  name: string;
  role: string;
}

interface ICharacter {
  resourceURI: string;
  name: string;
}

interface IStory {
  resourceURI: string;
  name: string;
  type: string;
}

interface IVariant {
  resourceURI: string;
  name: string;
}

interface ICollections extends IVariant {}

interface ICollectedIssues extends IVariant {}

interface IImages {
  path: string;
  extension: string;
}

interface IItems extends IVariant {
  role: string;
}
