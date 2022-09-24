// Redux ToolKit

import { addActionContact, deleteActionContact,changeActionFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";


const inititalState = {
    contacts: {
        items: [],
        filter: '',
  },
};


export const rootReducer = createReducer(inititalState, {
    [addActionContact] (state, action) {
         state.contacts.items.splice(0,0,   action.payload);
    },
    [deleteActionContact] (state, action) {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)
    },
    [changeActionFilter] (state, action) {
        state.contacts.filter = action.payload;
    },
});





// Redux ToolKit + createSlice

// import { createSlice } from "@reduxjs/toolkit";

// export const rootReducer = createSlice({
//     name: 'contacts',
//     inititalState: {
//         items: [],
//         filter: '',
//     },
//     reducers: {
//         addActionContact(state, action) {
//                      state.items.splice(0,0, action.payload);
//                 },
//         deleteActionContact(state, action) {
//                     state.items = state.items.filter(contact => contact.id !== action.payload)
//                 },
//         changeActionFilter(state, action) {
//                     state.filter = action.payload;
//                 },
//     }
// })

// export const { addActionContact, deleteActionContact, changeActionFilter} = rootReducer.actions;


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