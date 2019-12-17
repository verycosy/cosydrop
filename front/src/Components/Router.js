import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../Routes/Index";
import Room from "../Routes/Room";

export default () => {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/room/:namespace?" component={Room} />
    </Router>
  );
};
