import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  //let todo = {task: ""};
  let [todo, setTodo] = useState({ task: "", description: "" });

  let handleChangeTaskAction = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let handleChangeDescriptionAction = (e) => {
    //console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = () => {
    alert(todo.task + todo.description);
    console.log(todo);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter Task"
        value={todo.task}
        onChange={handleChangeTaskAction}
      />

      <textarea
        className="form-control"
        placeholder="Description"
        cols="30"
        rows="3"
        value={todo.description}
        onChange={handleChangeDescriptionAction}
      ></textarea>

      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}

export default App;
