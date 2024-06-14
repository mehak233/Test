
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
//Declares a functional component named TodoItem
// that takes a todo object as a prop. This object represents a single todo item.

//
const TodoItem = ({ todo }) => {
  const [todos, setTodos] = useContext(TodoContext);
/*Uses the useContext hook to access the current value of TodoContext.
todos contains the current list of todos.
setTodos is the function to update the todos list
toggle toggles the completion status of our items
*/
  const toggleComplete = () => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };
  //creates a new todos array by mapping over the current to dos array
  /*For each todo item t:
If the id of t matches the id of the current todo:
Creates a new object by spreading t and toggling the completed property (!t.completed).
If the id does not match, t remains unchanged.*/


  const deleteTodo = () => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);// updates the set to dos with the new todos list
  };
  //Creates a new array newTodos by removing
  // the todo item with the id that matches the id of the current todo.


  return (
    <div className={`todo-item ${todo.priority}`}>
      <h3 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </h3>
      <p>Priority: {todo.priority}</p>
      <button onClick={toggleComplete}>
        {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
