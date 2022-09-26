// Redux ToolKit + createSlice

import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addActionContact: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteActionContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    changeActionFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addActionContact, deleteActionContact, changeActionFilter } =
  contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};
export const contactsReducer = contactsSlice.reducer;

// Selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const persistedClickReducer = persistReducer(
  persistConfig,
  contactsReducer
);

// // Redux ToolKit + createReducer

// import { addActionContact, deleteActionContact,changeActionFilter } from "./actions";
// import { createReducer } from "@reduxjs/toolkit";

// const inititalState = {
//     contacts: {
//         items: [],
//         filter: '',
//   },
// };

// export const rootReducer = createReducer(inititalState, {
//     [addActionContact] (state, action) {
//          state.contacts.items.splice(0,0,  action.payload);
//     },
//     [deleteActionContact] (state, action) {
//         state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)
//     },
//     [changeActionFilter] (state, action) {
//         state.contacts.filter = action.payload;
//     },
// });

// Redux

// export const rootReducer = (state = inititalState, action) => {
//   switch (action.type) {
//     case 'contacts/addActionContact':
//       return [...state.contacts.items, action.payload];
//     case 'contacts/deleteActionContact':
//       return state.contacts.items.filter(contact => contact.id !== action.payload);
//     case 'filter/changeActionFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };
