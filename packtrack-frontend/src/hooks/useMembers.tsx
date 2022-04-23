import React, { useEffect, useState } from "react";
import axiosApiInstance from "../utils/axios";

interface userReceive {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profile: {
    photo: number;
    mobile: string;
  };
}

const useMembers = () => {
  const [members, setMembers] = useState<userReceive[]>([]);

  const getMembers = async () => {
    try {
      let res = await axiosApiInstance.get("/api/user/member");
      setMembers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);
  return { members };
};

export default useMembers;
