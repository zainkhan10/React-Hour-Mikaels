import { Fragment } from 'react'
import { Header, TodoList } from './components';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <TodoList />
    </Fragment>
  );
}

export default App;
