import React from 'react'

export const Store = React.createContext();

const initialState = {
    episodes: [],
    favourites: []
  };

function reducer() {}

export function StoreProvider(props) {
    return <Store.Provider value='data from store'>{props.children}
    </Store.Provider>
  }