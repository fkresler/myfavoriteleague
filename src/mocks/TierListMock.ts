import { GameMode, PositionalRole, TierListData } from '@/types';

const tierListMock: TierListData[] = [
  {
    id: '1',
    authorId: '0123456789',
    name: 'Top',
    mode: GameMode.SR,
    role: PositionalRole.TOP,
    isPublic: false,
    isRemovable: true,
    order: 0,
    lists: [
      {
        id: '1',
        order: 0,
        name: 'S-Tier',
        description: 'Absolute best',
        entries: [
          {
            id: '1',
            championId: 'MonkeyKing',
            note: 'Go full all in level 2',
          },
          {
            id: '2',
            championId: 'Urgot',
            note: 'Simple as fuck',
          },
          {
            id: '3',
            championId: 'Rumble',
            note: 'Good in every stage of the game',
          },
        ],
      },
      {
        id: '2',
        order: 1,
        name: 'A-Tier',
        description: 'Meh but fine',
        entries: [
          {
            id: '4',
            championId: 'Garen',
            note: 'Stumpf ist Trumpf',
          },
          {
            id: '5',
            championId: 'Aatrox',
            note: 'Broken if played correctly',
          },
        ],
      },
      {
        id: '3',
        order: 2,
        name: 'To try',
        description: 'Try these some time',
        entries: [
          {
            id: '6',
            championId: 'Sylas',
            note: 'Control the wave, control the game',
          },
          {
            id: '7',
            championId: 'Neeko',
            note: 'Play into a melee matchup',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    authorId: '0123456789',
    name: 'Jungle',
    mode: GameMode.SR,
    role: PositionalRole.JNG,
    isPublic: false,
    isRemovable: true,
    order: 1,
    lists: [
      {
        id: '4',
        order: 0,
        name: 'S-Tier',
        description: 'Absolute best',
        entries: [
          {
            id: '8',
            championId: 'LeeSin',
            note: 'Beast jungler',
          },
          {
            id: '9',
            championId: 'Warwick',
            note: 'Strong early, medium late',
          },
          {
            id: '10',
            championId: 'Taliyah',
            note: 'Insane burst',
          },
        ],
      },
      {
        id: '5',
        order: 1,
        name: 'A-Tier',
        description: 'Meh but fine',
        entries: [
          {
            id: '11',
            championId: 'Elise',
            note: 'Fallback early game jungler',
          },
          {
            id: '12',
            championId: 'Nocturne',
            note: 'Broken if played correctly',
          },
        ],
      },
      {
        id: '6',
        order: 2,
        name: 'To try',
        description: 'Try these some time',
        entries: [
          {
            id: '12',
            championId: 'Sylas',
            note: 'Complete tank and full heal',
          },
          {
            id: '13',
            championId: 'Wukong',
            note: 'Spin to win',
          },
        ],
      },
    ],
  },
];

export default tierListMock;
