import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk);
export default createStore(rootReducer, {}, middleware);
// export const store = createStore(rootReducer, middleware);