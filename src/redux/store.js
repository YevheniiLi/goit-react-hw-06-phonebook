// Redux
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer} from 'redux/reducer'

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// Redux Toolkit 

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/reducer';

export const store = configureStore({
    reducer: rootReducer,
})