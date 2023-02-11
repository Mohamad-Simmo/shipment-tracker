import React, { createContext, useContext, useReducer } from 'react';
import {
  UserState,
  UserContextProps,
  UserReducerAction,
  USER_ACTIONS,
} from '../types';

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem('user') || '{}'),
};

const UserContext = createContext<UserContextProps>({
  state: initialState,
  dispatch: () => {},
});

const userReducer = (
  state: UserState,
  action: UserReducerAction
): UserState => {
  switch (action.type) {
    case USER_ACTIONS.LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        user: action.payload,
      };
    case USER_ACTIONS.LOGOUT:
      localStorage.removeItem('user');
      return { user: null };
  }
};

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
