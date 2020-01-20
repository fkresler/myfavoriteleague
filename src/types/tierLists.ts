export type TierList = {
  id: string;
  authorId: string;
  name: string;
  order: number;
  lists?: string[];
};

export type IChampionListData = {
  championListId: string;
  order: number;
  name: string;
  description?: string;
  champions: IChampionEntryData[];
};

export type IChampionList = IChampionListData & {
  updateChampionList: () => void;
  deleteChampionList: (championListId: string) => void;
};

export type IChampionEntryData = {
  championEntryId: string;
  championId: string;
  note?: string;
};

export type IChampionEntry = IChampionEntryData & {
  updateChampionEntry: (note?: string) => void;
  deleteChampionEntry: (championEntryId: string) => void;
};
