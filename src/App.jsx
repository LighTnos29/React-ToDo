import { useState } from "react";
import {ReactDOM} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos)


  const handleEdit = (index) => {
    const editedTodo = todosQ.find((todo,i) => i !== index)
    console.log(editedTodo)
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((todo,i) => i !== index)
    setTodos(updatedTodos)
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if(todo.length!=0){
      setTodos([...todos,{todo}]);
      setTodo("");
    }
  };
  return (
    <>
      <Navbar />

      <div className="addtodo mx-20 my-6">
        <p className="text-lg font-medium ">Add Another Todo</p>
        <input
          onChange={handleInput}
          type="text"
          value={todo}
          className="w-96 px-1 border-2 border-violet-950 mt-2"
        />
        <button
          onClick={handleAdd}
          className="bg-violet-950 hover:bg-violet-800 px-3 text-lg mx-4 text-white rounded-md"
        >
          +
        </button>
      </div>
      <div className="container bg-violet-100 mx-auto w-[200vh] my-8 rounded-xl p-6">
        <div>
          <h1 className="text-3xl font-medium text-center">My Todo's</h1>
        </div>
        <div className="todos">
          {todos.map((item,index) => {
            return (
              <div
                key={index}
                className="todo flex bg-white p-2 rounded-2xl mt-6 justify-between items-center bg-opacity-50 hover:bg-opacity-100"
              >
                
                <div className="" id="tasks">{item.todo}</div>
                <div className="buttons">
                <input type="checkbox" className="my-[4px] mx-4" />
                  <button
                    onClick={()=>handleEdit(index)}
                    className="bg-violet-950 hover:bg-violet-800 px-3 text-sm mx-4 text-white rounded-md py-[4px]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={()=>handleDelete(index)}
                    className="bg-violet-950 hover:bg-violet-800 px-3 text-sm mx-4 text-white rounded-md py-[4px]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
