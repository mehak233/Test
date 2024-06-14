import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {
    return (
        <TodoProvider>
            <div className="App">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;
