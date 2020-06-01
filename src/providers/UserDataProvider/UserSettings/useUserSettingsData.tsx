import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { UserSettingsAction, UserSettingsData, AsyncUserSettingsData } from '@/types';
import * as userSettingsActions from './userSettingsActions';
import userSettingsReducer from './userSettingsReducer';

export const initialUserSettingsData: UserSettingsData = {
  summonerName: '',
  useDarkTheme: true,
};

export const initialAsyncUserSettingsData: AsyncUserSettingsData = {
  hasLoaded: false,
  isLoading: true,
  isError: false,
  data: initialUserSettingsData,
};

export const useUserSettingsData = () => {
  const Firebase = React.useContext(FirebaseContext);
  const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [state, dispatch] = React.useReducer(userSettingsReducer, initialUserSettingsData);

  const userId = Firebase.authUser ? Firebase.authUser.uid : null;

  React.useEffect(() => {
    setHasLoaded(false);
  }, [Firebase.authUser]);

  const enhancedDispatch = async (action: UserSettingsAction) => {
    setIsError(false);
    if (!userId) {
      setIsError(true);
    } else {
      switch (action.type) {
        case 'FETCH_SETTINGS': {
          try {
            setIsLoading(true);
            const snapShotData = await Firebase.Firebase.firestore
              .collection('usersettings')
              .doc(userId)
              .get();
            const userSettingsData = (snapShotData.data() || {}) as { data?: UserSettingsData };
            dispatch(userSettingsActions.setUserSettings(userSettingsData || {}));
            setHasLoaded(true);
            setIsLoading(false);
          } catch {
            setIsError(true);
            setIsLoading(false);
          }
          break;
        }
        case 'PUSH_SETTINGS': {
          try {
            await Firebase.Firebase.firestore.collection('usersettings').doc(userId).set({
              data: state,
            });
          } catch {
            setIsError(true);
          }
          break;
        }
        default: {
          dispatch(action);
        }
      }
    }
  };

  return {
    state: {
      hasLoaded,
      isLoading,
      isError,
      data: state,
    },
    dispatch: enhancedDispatch,
  };
};

export default useUserSettingsData;
