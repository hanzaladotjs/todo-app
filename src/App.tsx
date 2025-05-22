import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <div className="flex space-x-30 m-10 justify-around items-center">
        <h1 className="text-blue-900 text-3xl font-bold font-mono"> Todo App </h1>
        <button className="border border-solid border-blue-900 px-5 font-bold py-2 rounded-xl bg-blue-200 "> Add Todo </button>
      </div>
    </div>
  );
}

export default App;
