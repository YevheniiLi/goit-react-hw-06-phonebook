import { createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from './constants';

const inititalState = {
    contacts : {
        items: [],
        filter: statusFilters.all,
    },
}

const rootReducer = (state = inititalState, action) => {
    return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer,enhancer);



