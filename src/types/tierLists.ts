export type ITierListApp = {
  data: ITierListData[];
  selectedList: string;
  methods: ITierListMethods;
};

export type ITierListMethods = {
  saveTierLists: (tierListData: ITierListData[]) => Promise<void>;
  selectList: (id: string) => void;
  createTierList: (name: string, order: number) => Promise<void>;
  updateTierList: (
    id: string,
    name: string,
    order: number,
    lists: IChampionListData[],
  ) => Promise<void>;
  deleteTierList: (id: string) => Promise<void>;
  updateTierListInfo: (tierListId: string, name: string, order: number) => void;
  createChampionList: (
    tierListId: string,
    name: string,
    description: string,
    order: number,
  ) => void;
  updateChampionListInfo: (
    tierListId: string,
    championListId: string,
    name: string,
    description: string,
    order: number,
  ) => void;
  deleteChampionList: (tierListId: string, championListId: string) => void;
  addChampionEntry: (
    tierListId: string,
    championListId: string,
    championId: string,
    note: string,
  ) => void;
  updateChampionEntry: (
    tierListId: string,
    championListId: string,
    championEntryId: string,
    note: string,
  ) => void;
  deleteChampionEntry: (
    tierListId: string,
    championListId: string,
    championEntryId: string,
  ) => void;
};

export type ITierListData = {
  tierListId: string;
  authorId: string;
  name: string;
  order?: number;
  lists?: IChampionListData[];
};

export type ITierList = ITierListData & {
  methods: ITierListMethods;
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
