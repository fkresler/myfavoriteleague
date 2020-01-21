import { ITierListData } from '@/types/tierLists';

const tierListMock: ITierListData[] = [
  {
    tierListId: '1',
    authorId: '0123456789',
    name: 'Top',
    order: 0,
    lists: [
      {
        championListId: '1',
        order: 0,
        name: 'S-Tier',
        description: 'Absolute best',
        entries: [
          {
            championEntryId: '1',
            championId: 'MonkeyKing',
            note: 'Go full all in level 2',
          },
          {
            championEntryId: '2',
            championId: 'Urgot',
            note: 'Simple as fuck',
          },
          {
            championEntryId: '3',
            championId: 'Rumble',
            note: 'Good in every stage of the game',
          },
        ],
      },
      {
        championListId: '2',
        order: 1,
        name: 'A-Tier',
        description: 'Meh but fine',
        entries: [
          {
            championEntryId: '4',
            championId: 'Garen',
            note: 'Stumpf ist Trumpf',
          },
          {
            championEntryId: '5',
            championId: 'Aatrox',
            note: 'Broken if played correctly',
          },
        ],
      },
      {
        championListId: '3',
        order: 2,
        name: 'To try',
        description: 'Try these some time',
        entries: [
          {
            championEntryId: '6',
            championId: 'Sylas',
            note: 'Control the wave, control the game',
          },
          {
            championEntryId: '7',
            championId: 'Neeko',
            note: 'Play into a melee matchup',
          },
        ],
      },
    ],
  },
  {
    tierListId: '2',
    authorId: '0123456789',
    name: 'Jungle',
    order: 1,
    lists: [
      {
        championListId: '4',
        order: 0,
        name: 'S-Tier',
        description: 'Absolute best',
        entries: [
          {
            championEntryId: '8',
            championId: 'LeeSin',
            note: 'Beast jungler',
          },
          {
            championEntryId: '9',
            championId: 'Warwick',
            note: 'Strong early, medium late',
          },
          {
            championEntryId: '10',
            championId: 'Taliyah',
            note: 'Insane burst',
          },
        ],
      },
      {
        championListId: '5',
        order: 1,
        name: 'A-Tier',
        description: 'Meh but fine',
        entries: [
          {
            championEntryId: '11',
            championId: 'Elise',
            note: 'Fallback early game jungler',
          },
          {
            championEntryId: '12',
            championId: 'Nocturne',
            note: 'Broken if played correctly',
          },
        ],
      },
      {
        championListId: '6',
        order: 2,
        name: 'To try',
        description: 'Try these some time',
        entries: [
          {
            championEntryId: '12',
            championId: 'Sylas',
            note: 'Complete tank and full heal',
          },
          {
            championEntryId: '13',
            championId: 'Wukong',
            note: 'Spin to win',
          },
        ],
      },
    ],
  },
];

export default tierListMock;
