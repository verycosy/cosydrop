import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Node from "./Node";
import { getSocket, connect } from "../../socket";

const Namespace = styled.div`
  font-weight: 600;
  font-size: 2em;
`;

const EVENT_TYPE = {
  WELCOME: "WELCOME",
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED"
};

export default ({ username }) => {
  const history = useHistory();
  const { namespace } = useParams();
  const [peerList, setPeerList] = useState([]);
  const [text, setText] = useState("");

  const join = () => {
    history.push(`/room/${text}`);
  };

  useEffect(() => {
    if (namespace) {
      connect(username, namespace);

      const socket = getSocket();

      const newPeer = newPeerUsername =>
        setPeerList([...peerList, newPeerUsername]);

      const losePeer = losePeerUsername =>
        setPeerList(
          peerList.filter(peerUsername => peerUsername !== losePeerUsername)
        );

      const getPeers = peers => setPeerList(peers);

      socket.on(EVENT_TYPE.WELCOME, getPeers);
      socket.on(EVENT_TYPE.CONNECTED, newPeer);
      socket.on(EVENT_TYPE.DISCONNECTED, losePeer);
    }
  }, [username, namespace]);

  return namespace ? (
    <>
      <Namespace>{namespace}</Namespace>
      <div>
        <Node username={username} />

        {peerList.map((username, i) => (
          <Node key={i} username={username} />
        ))}
      </div>
      {peerList.length > 0 && <button>Spread</button>}
    </>
  ) : (
    <>
      <input
        type="text"
        placeholder="namespace"
        value={text}
        onChange={evt => setText(evt.target.value)}
      />
      <button onClick={join}>Join</button>
    </>
  );
};

//TODO: 내가 보내는 거 / 받는 거 / 받기 or 거절

// Master or PW ?
