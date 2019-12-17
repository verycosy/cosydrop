import React from "react";
import Router from "./Components/Router";
import Provider from "./context";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
