const inititalState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'contacts/addActionContact':
      return [...state.contacts, action.payload];
    case 'contacts/deleteActionContact':
      return state.filter(contact => contact.id !== action.payload);
    case 'filter/changeActionFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};