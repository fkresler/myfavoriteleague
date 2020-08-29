import { getChampionImageUrl } from './championInfoUtils';

describe('getChampionImageUrl', () => {
  it('returns a valid url when provided with a valid version and imageName', () => {
    expect(getChampionImageUrl('10.8.0', 'AoShin')).toEqual(
      'http://ddragon.leagueoflegends.com/cdn/10.8.0/img/champion/AoShin',
    );
  });
  it('returns undefined when no imageName is provided', () => {
    expect(getChampionImageUrl('10.8.0', undefined)).toBeUndefined();
  });
  it('returns undefined when no version is provided', () => {
    expect(getChampionImageUrl(undefined, 'AoShin')).toBeUndefined();
  });
  it('returns undefined if neither a version nor an imageName is provided', () => {
    expect(getChampionImageUrl(undefined, undefined)).toBeUndefined();
  });
});
