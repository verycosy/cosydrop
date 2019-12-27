import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  font-weight: 800;
`;
//TODO: 쿠키나 로컬스토리지 이용해서 유저이름을 불러오는 것도 좋겠다.

export default () => {
  return (
    <>
      <Title>CosyDrop</Title>
      <Link to="/room">
        <button>Start Sharing</button>
      </Link>
    </>
  );
};
