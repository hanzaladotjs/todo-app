import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <div className="flex md:space-x-30 md:m-10 my-10 mx-2  justify-between md:justify-around items-center">
        <h1 className="text-blue-900 md:text-3xl text-xl font-bold font-mono"> Todo App </h1>
        <button className="border border-solid border-blue-900 px-3 md:px-5 font-roboto font-bold md:py-2 rounded-xl bg-blue-200 "> Add Todo </button>
      </div>
    </div>
  );
}

export default App;
