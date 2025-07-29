import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../tasksSlice';

export default function ListTask() {
  const { items, filter } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const filtered = items.filter(task => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true; // ALL
  });

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
        <button onClick={() => dispatch(setFilter('DONE'))} style={{ marginLeft: '0.5rem' }}>
          Done
        </button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))} style={{ marginLeft: '0.5rem' }}>
          Not Done
        </button>
      </div>
      {filtered.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
}
