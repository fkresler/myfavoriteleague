export type ITierListData = {
  tierListId: string;
  authorId: string;
  name: string;
  order?: number;
  lists?: IChampionListData[];
};

export type ITierList = ITierListData & {
  updateTierList: (
    tierListId: string,
    name: string,
    order: number,
    lists: IChampionListData[],
  ) => void;
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
  updateChampionList: (
    championListId: string,
    name: string,
    description: string,
    order: number,
    entries: IChampionEntryData[],
  ) => void;
  deleteChampionList: (championListId: string) => void;
  addChampionEntry: (championListId: string, championId: string, note: string) => void;
  updateChampionEntry: (championListId: string, championEntryId: string, note: string) => void;
  deleteChampionEntry: (championListId: string, championEntryId: string) => void;
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
