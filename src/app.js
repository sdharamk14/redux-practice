import React from "react";
import Cake from "./components/Cake";
import Icecream from "./components/Icecream";
import Todos from "./components/Todo";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <Cake />
      <hr />
      <Icecream />
      <hr />
      <User />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
