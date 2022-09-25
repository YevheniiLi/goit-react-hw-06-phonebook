// Redux ToolKit + createSlice

// import { createSlice } from "@reduxjs/toolkit";
// export const contactSlice = createSlice({
//     name: 'contacts',
//     inititalState: {
//         items: [],
//         filter: '',
//     },
//     reducers: {
//         addActionContact: (state, action) => {
//             return { ...state, items: [...state.items, action.payload] };
//           },
//         deleteActionContact: (state, action) => {
//             return {
//               ...state,
//               items: state.items.filter(contact => contact.id !== action.payload),
//             };
//           },
//         changeActionFilter: (state, action) => {
//             return { ...state, filter: action.payload };
//           },
//         },
// })

// export const { addActionContact, deleteActionContact, changeActionFilter} = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;





// Redux ToolKit + createReducer

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
         state.contacts.items.splice(0,0,  action.payload);
    },
    [deleteActionContact] (state, action) {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)
    },
    [changeActionFilter] (state, action) {
        state.contacts.filter = action.payload;
    },
});






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