# Redux Toolkit ToDo App Spec

## Overview
Build a ToDo application using React and Redux Toolkit to manage global state. Users can add, filter, and edit tasks.

## Goals
- Scaffold with Create React App
- Use Redux Toolkit (`@reduxjs/toolkit`) for state management
- Tasks have attributes: `id`, `description`, `isDone`
- Create components: `AddTask`, `ListTask`, `Task`
- Features:
  - **Add** a new task
  - **Filter** tasks by done / not done
  - **Edit** a task’s description

## Technical Stack
- React
- Redux Toolkit
- React-Redux
- Vanilla CSS or inline styling

## Requirements
1. **tasksSlice.js**:
   - Create slice with initial state `[]`
   - Reducers: `addTask`, `toggleDone`, `editTask`, `setFilter`
2. **store.js**: configure store with tasks slice
3. **AddTask.js**:
   - Input + button to dispatch `addTask`
4. **Task.js**:
   - Destructure `id`, `description`, `isDone`
   - Render description text (strikethrough if done)
   - Button to toggle done
   - Button or inline edit to dispatch `editTask`
5. **ListTask.js**:
   - Read tasks and filter from state
   - Map tasks to `Task` components
   - Buttons to set filter: Show All, Done, Not Done
6. **App.js**:
   - Wrap with `<Provider>`
   - Render `AddTask` and `ListTask`

## Open Questions
- Inline editing vs modal? (choose inline)
- Persist state? (future enhancement)
``` ```

---

### 2. README.md
```markdown
# Redux Toolkit ToDo App

A simple ToDo application built with React and Redux Toolkit. Users can add, filter, and edit tasks.

## Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/<username>/redux-todo-app.git
   cd redux-todo-app
