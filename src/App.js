// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// App.js
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

export default function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>ToDo Application</h2>
      <AddTask />
      <ListTask />
    </div>
  );
}
