import React, { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import "./App.css";

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I have a Token : ", token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
