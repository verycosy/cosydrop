import React from "react";
import { Link } from "react-router-dom";
//TODO: 쿠키나 로컬스토리지 이용해서 유저이름을 불러오는 것도 좋겠다.

export default () => {
  return (
    <div>
      <span>Index</span>
      <div>
        <Link to="/room">Start Sharing</Link>
      </div>
    </div>
  );
};
