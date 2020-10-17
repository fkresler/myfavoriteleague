export const getChampionImageUrl = (
  version: string | undefined,
  imageName: string | undefined,
): string | undefined => {
  if (!version || !imageName) {
    return undefined;
  }
  return `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${imageName}`;
};

export default getChampionImageUrl;
