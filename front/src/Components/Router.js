import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Index from "../Routes/Index";
import Room from "../Routes/Room";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Router>
        <Route exact path="/" component={Index} />
        <Route path="/room/:namespace?" component={Room} />
      </Router>
    </Container>
  );
};
