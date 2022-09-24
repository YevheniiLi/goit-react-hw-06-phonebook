// Redux

export const addActionContact = newContact => {
  return {
    type: 'contact/addActionContact',
    payload: newContact,
    };
};

export const deleteActionContact = contactId => {
    return {
        type: 'contact/deleteActionContact',
        payload: contactId,
    }
}

export const changeActionFilter = value => {
    return {
        type: 'filter/changeActionFilter',
        payload: value,
    }
}