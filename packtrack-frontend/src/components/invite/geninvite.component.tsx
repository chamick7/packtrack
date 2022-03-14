import React, { useEffect, useState, useContext } from "react";
import useInviteToken from "../../hooks/useInviteToken";
import QRCode from "react-qr-code";

const GenInvite = () => {
  const [token, setToken] = useState<string>();
  const { genToken } = useInviteToken();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const [url, setUrl] = useState("");
  // const url = `${window.location.origin}/register?token=${token}`;

  const generateToken = async () => {
    setButtonDisabled(true);
    const inviteToken = await genToken();
    if (inviteToken) {
      setToken(inviteToken);
      setTimeout(() => setButtonDisabled(false), 5000);
      await setUrl(`${window.location.origin}/register?token=${token}`);
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
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex h-[200px] w-full border-4 justify-center items-center">
          {token && <QRCode value={url} size={128} />}
        </div>
        <div className="flex flex-col w-full">
          <label className="font-[kanit] ">ลิงก์เพื่อลงทะเบียน</label>
          <div onClick={() => `${window.open(url,'_blank')}`} className="cursor-pointer w-full truncate border rounded border-[#F0304A] py-4 px-2 font-[kanit] text-[#00B1FF] my-1">
            {url}
          </div>
          <button
            onClick={clickToCopy}
            className="text-right font-[kanit] text-[#11C6FF] text-sm"
          >
            คัดลอก
          </button>
        </div>
        <button
          className={
            buttonDisabled === false
              ? "flex justify-center text-center w-5/12 font-[kanit] bg-main rounded text-white px-3 py-1 md:w-3/12"
              : "flex justify-center text-center w-5/12 font-[kanit] bg-slate-500 rounded text-white px-3 py-1 md:w-3/12"
          }
          // className="flex justify-center text-center w-2/12 font-[kanit] bg-main rounded text-white px-3 py-1"
          onClick={generateToken}
          disabled={buttonDisabled}
        >
          สร้าง
        </button>
      </div>
    </>
  );
};

export default GenInvite;
