import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    rooms: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};


export const SearchContextProvider = ({children}) => {
    const [searchState, dispatchSearch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{
            city: searchState.city,
            dates: searchState.dates,
            options: searchState.options,
            dispatchSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}