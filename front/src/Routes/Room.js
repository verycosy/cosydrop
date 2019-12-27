import React, { useState } from "react";
import Setting from "../Components/Room/Setting";
import SharingRoom from "../Components/Room/SharingRoom";

export default () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return username ? (
    <SharingRoom username={username} />
  ) : (
    <Setting fn={setUsername} />
  );
};
