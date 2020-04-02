import { combineReducers } from 'redux-immutable';
import { listReducer } from '../components/list/store';

const reducer = combineReducers({
    list : listReducer,
});

export default reducer;


