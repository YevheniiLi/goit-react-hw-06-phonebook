import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer} from 'redux/reducer'



const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
