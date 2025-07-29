import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filter: 'ALL'
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(description) {
        return { payload: { id: nanoid(), description, isDone: false } };
      }
    },
    toggleDone(state, action) {
      const task = state.items.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const task = state.items.find(t => t.id === id);
      if (task) task.description = description;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleDone, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
