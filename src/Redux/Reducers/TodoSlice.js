/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
const initialState = [];

const userSlice = createSlice({
  name: 'todo',
  initialState: {value: initialState},
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
      console.log('!!!!!!!!!!!!!!', state.value);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.value = state.value.map(todoItem => {
        if (todoItem.id === action.payload) {
          todoItem.state = !todoItem.state;
        }
        return todoItem;
      });
    },

    editTodo: (state, action) => {
      state.value.map(todo => {
        if (todo.id === action.payload.id) {
          todo.task = action.payload.task;
        }
      });
    },
  },
});
export const {addTodo, deleteTodo, completeTodo, editTodo} = userSlice.actions;
export default userSlice.reducer;
