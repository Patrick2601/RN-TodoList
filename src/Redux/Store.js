import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../Redux/Reducers/CountReducer';
import todoReducer from '../Redux/Reducers/TodoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: counterReducer,
  },
});

//-----------------------------------------------------------//

// import {createStore, combineReducers} from 'redux';
// import CountReducer from './Reducers/CountReducer';

// const rootReducer = combineReducers({
//   count: CountReducer,
// });

// export const store = createStore(rootReducer);
