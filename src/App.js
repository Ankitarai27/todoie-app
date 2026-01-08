
import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import MainHeading from './components/MainHeading';
import CounterCpmponent from './components/CounterComponent';

import "./style.css";
const App=()=> {
  return (
    <div >
      <CounterCpmponent></CounterCpmponent>
      <div className='main-heading'>
        <MainHeading></MainHeading>
      </div>
      <div className='todo-container'>
      <Header title="Todo"></Header>
      <TodoItem text="Eat" />
      <TodoItem comleted={true} text="Code" />
      <TodoItem text="Play" />
      <TodoItem text="Study" />
      <TodoItem text="Sleep " />
      <Button></Button>
      </div>
    </div>
  );
};

export default App;
