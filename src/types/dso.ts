
export interface DSOObject {
  id: string;
  catalog: string;
  commonName: string;
  objectType: string;
  constellation: string;
  bestSeason: string;
}

export type CatalogType = 'Messier' | 'Caldwell' | 'Barnard' | 'Sharpless';

export interface FilterState {
  search: string;
  season: string;
  objectType: string;
  capturedStatus: string;
}
