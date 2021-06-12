import React, { useReducer } from 'react';
import { reducer } from './reducer';

export const StoreContext = React.createContext({});

const Store = ({children}) => {
  const initialState = {
    error: false,
    loading: false,
    searchInput: '',
    selectedRepo: '',
    repos: [],
    initRepos: [],
    sortedRepos: [],
    filteredRepos: [],
  };

  const [context, updateContext] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ ...context, updateContext }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => React.useContext(StoreContext)

export default Store;