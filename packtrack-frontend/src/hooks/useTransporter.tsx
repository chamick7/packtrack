import React, { useEffect, useState } from "react";
import axiosApiInstance from "../utils/axios";
import { TransportersType } from "../types/transporters.type";

interface transReceive {
  message: string;
  transporter: TransportersType[];
}

const useTransporter = () => {
  const [transporters, setTransporters] = useState<TransportersType[]>([]);

  const getAllTrans = async () => {
    try {
      let res = await axiosApiInstance.get<transReceive>(
        "/api/transporter/all"
      );

      setTransporters(res.data.transporter);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTrans();
  }, []);

  return { transporters };
};

export default useTransporter;
