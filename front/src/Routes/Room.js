import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "../context";
import Setting from "../Components/Room/Setting";
import SharingRoom from "../Components/Room/SharingRoom";

export default () => {
  const { username, namespace } = useState();
  const { namespace: paramNamespace } = useParams();

  return username ? (
    namespace ? (
      <SharingRoom />
    ) : (
      <Setting type={"namespace"} />
    )
  ) : (
    <Setting type={"username"} />
  );
};
