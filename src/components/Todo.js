import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/actions/todoActions";

const Todos = () => {
  const { todos, loading } = useSelector((state) => state.todo);
  console.log("todos", todos);
  console.log("loading", loading);
  const dispatch = useDispatch();

  const renderTodo = () => {
    return todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
  };

  if (loading) return <div>...Loading</div>;

  return (
    <div>
      {todos.length > 0 ? (
        <ul>{renderTodo()}</ul>
      ) : (
        <button onClick={() => dispatch(getTodos())}>Load todos</button>
      )}
    </div>
  );
};

export default Todos;
