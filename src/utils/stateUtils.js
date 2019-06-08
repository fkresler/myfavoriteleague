import Cookies from 'js-cookie';

const MY_FAVORITE_LEAGUE_COOKIE_NAME = 'myfavoriteleagueappstate';

export const getPreviousStateData = () => {
  // Read previous user data state from cookies
  let previousUserData = Cookies.get(MY_FAVORITE_LEAGUE_COOKIE_NAME);
  previousUserData = previousUserData ? JSON.parse(previousUserData) : {};
  const userId = previousUserData.userId ? previousUserData.userId : null;
  // If there was a user id try to recreate the previous state from the backend information
};

export const saveUserData = async (userId, state) => {};
