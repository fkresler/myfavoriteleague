export type TierList = {
  id: string;
  authorId: string;
  name: string;
  order: number;
  lists?: string[];
};

export type ChampionList = {
  id: string;
  name: string;
  order: number;
  champions?: string[];
};

export type ChampionEntry = {
  id: string;
  championId: string;
  note?: string;
};
