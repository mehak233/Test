
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
//use context helps in accessing context values whereas use
// state is used to create variables in functional components
// unique id
// shares the to do state across the components


//declares a functional component called add to do
//initialises a state variable such a title with a default empty value and set waale is the setters
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Field cannot be blank");
      return;
    }
    /*Declares a function addTodo that takes an event object e as an argument. This function will handle adding a new todo item.
Prevents the default form submission behavior. This is useful if addTodo is triggered by a form submission event.

    */
   //creates a new array new todos includin the newtodos and the old ones

    const newTodos = [
      ...todos,
      { id: uuidv4(), title, priority, completed: false },
    ];
    //completed ko false rakhege tab hi jaake automatic false add hoga varna strike through completed add hoga
    setTodos(newTodos);
    //update the todos with the new todos array whcih effectively adds all the news one to the array
    setTitle("");
    setPriority("low");
  };
//onChange event handler that updates the title state with the 
//input's current value using setTitle(e.target.value).

  return (
    <div className="form-input-container">
      <input
        value={title}
        className="form-input"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo..."
      />
      <select
        value={priority}
        className="form-select"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="button" className="form-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;




