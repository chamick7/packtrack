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

const useOfficers = () => {
  const [officers, setOfficers] = useState<userReceive[]>([]);

  const getOfficers = async () => {
    try {
      let res = await axiosApiInstance.get("/api/user/officer");
      setOfficers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOfficers();
  }, []);
  return { officers };
};
export default useOfficers;
