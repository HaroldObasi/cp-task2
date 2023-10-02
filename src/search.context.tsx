import React, { Dispatch, createContext, useReducer } from "react";

type ActionTypes = {
  type: string;
  searchKey: string;
};

type StateType = {
  searchKey: string;
};

const initialState: StateType = {
  searchKey: "",
};

const reducer = (state: StateType, action: ActionTypes): StateType => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      return { ...state, searchKey: action.searchKey };

    default:
      return state;
  }
};

export const SearchContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionTypes>;
}>({ state: initialState, dispatch: () => null });

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
