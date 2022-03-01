import React, { useEffect, useState, useContext } from "react";
import useInviteToken from "../../hooks/useInviteToken";
import QRCode from "react-qr-code";

const GenInvite = () => {
  const [token, setToken] = useState<string>();
  const { genToken } = useInviteToken();

  const url = `${window.location.origin}/register?token=${token}`;

  const generateToken = async () => {
    const inviteToken = await genToken();
    if (inviteToken) {
      setToken(inviteToken);
    }
  };

  const clickToCopy = () => {
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    console.log(window.location.origin);
  }, []);

  return (
    <>
      {token && <QRCode value={url} />}
      <button onClick={generateToken}>Gen</button>
      <button onClick={clickToCopy}>Copy</button>
    </>
  );
};

export default GenInvite;
