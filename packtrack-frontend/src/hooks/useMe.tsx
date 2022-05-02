import React, { useEffect, useState } from "react";
import axiosApiInstance from "../utils/axios";

interface user {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profile: {
    photo: number;
    mobile: string;
  };
  notification: {
    email: boolean;
    sms: boolean;
    line: boolean;
  };
}

const useMe = () => {
  const [userInfo, setUserInfo] = useState<user>({
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    profile: {
      photo: 0,
      mobile: "",
    },
    notification: {
      email: false,
      sms: false,
      line: false,
    },
  });

  const getUserInfo = async () => {
    try {
      let res = await axiosApiInstance.get("/api/user/me");
      setUserInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return { userInfo };
};

export default useMe;
