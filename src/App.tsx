import React from 'react';
import './App.css';
import './style/reset.css'
import { Dashboard } from './container/Dashbaord';
import {Todo} from './container/Todo';

function App() {
  return (
    < >
      <Todo />
      <Dashboard /> 
    </>
  );
}

export default App;
