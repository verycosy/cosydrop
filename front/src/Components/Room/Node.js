import React from "react";
import styled from "styled-components";

const Node = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;

export default ({ username }) => (
  <Node>
    <span>{username[0]}</span>
  </Node>
);
