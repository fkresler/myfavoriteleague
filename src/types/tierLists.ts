export type TierList = {
  id: string;
  authorId: number;
  name: string;
  order: number;
  lists?: number[];
};

export type ChampionList = {
  id: string;
  name: string;
  order: number;
  champions?: number[];
};

export type ChampionEntry = {
  id: string;
  championId: string;
  note?: string;
};
