export type TierListAction = {
  type:
    | 'UPDATE_TIERLIST_INFO'
    | 'CREATE_CHAMPIONLIST'
    | 'UPDATE_CHAMPIONLIST_INFO'
    | 'DELETE_CHAMPIONLIST'
    | 'ADD_CHAMPIONENTRY'
    | 'UPDATE_CHAMPIONENTRY'
    | 'DELETE_CHAMPIONENTRY';
  payload: any;
};

export const updateTierListInfo = (name: string, order: number) => {
  return {
    type: 'UPDATE_TIERLIST_INFO',
    payload: {
      name,
      order,
    },
  };
};

export const createChampionList = (
  name: string = 'New List',
  description: string,
  order: number = 0,
) => {
  return {
    type: 'CREATE_CHAMPIONLIST',
    payload: {
      championListId: new Date().getTime().toString() + Math.random(),
      name,
      description,
      order,
      entries: [],
    },
  };
};

export const updateChampionListInfo = (
  championListId: string,
  name: string,
  description: string,
  order: number,
) => {
  return {
    type: 'UPDATE_CHAMPIONLIST_INFO',
    payload: {
      championListId,
      name,
      description,
      order,
    },
  };
};

export const deleteChampionList = (championListId: string) => {
  return {
    type: 'DELETE_CHAMPIONLIST',
    payload: {
      championListId,
    },
  };
};

export const addChampionEntry = (championListId: string, championId: string, note: string) => {
  return {
    type: 'ADD_CHAMPIONENTRY',
    payload: {
      championEntryId: new Date().getTime().toString() + Math.random(),
      championListId,
      championId,
      note,
    },
  };
};

export const updateChampionEntry = (
  championListId: string,
  championEntryId: string,
  note: string,
) => {
  return {
    type: 'UPDATE_CHAMPIONENTRY',
    payload: {
      championEntryId,
      championListId,
      note,
    },
  };
};

export const deleteChampionEntry = (championListId: string, championEntryId: string) => {
  return {
    type: 'DELETE_CHAMPIONENTRY',
    payload: {
      championListId,
      championEntryId,
    },
  };
};
