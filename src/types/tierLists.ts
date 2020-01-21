export type ITierListData = {
  tierListId: string;
  authorId: string;
  name: string;
  order?: number;
  lists?: IChampionListData[];
};

export type ITierList = ITierListData & {
  updateTierList: (tierListId: string) => void;
  deleteTierList: (tierListId: string) => void;
};

export type IChampionListData = {
  championListId: string;
  order?: number;
  name: string;
  description?: string;
  entries: IChampionEntryData[];
};

export type IChampionList = IChampionListData & {
  updateChampionList: (championListId: string) => void;
  deleteChampionList: (championListId: string) => void;
};

export type IChampionEntryData = {
  championEntryId: string;
  championId: string;
  note?: string;
};

export type IChampionEntry = IChampionEntryData & {
  updateChampionEntry: (championEntryId: string, note?: string) => void;
  deleteChampionEntry: (championEntryId: string) => void;
};
