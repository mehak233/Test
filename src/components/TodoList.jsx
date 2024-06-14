
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
//This line creates a new context object named TodoContext using createContext.


const TodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  //INITialises a state variable with a default value all(shows all the tasks)
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  //order in which todos are displayed

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }//if saved to dos not null then updated the todos states using set todos
  }, [setTodos]);
  //,retrivees the string from local stroage,converts the string into a js object

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
//saves the current todos to local storage by converting it to a string
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "notCompleted") return !todo.completed;
    return true;
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sortOrder === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("notCompleted")}>Not Completed</button>
        <button onClick={() => setSortOrder("priority")}>Sort by Priority</button>
      </div>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;










