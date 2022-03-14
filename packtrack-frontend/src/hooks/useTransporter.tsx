import React from "react";
import axiosApiInstance from "../utils/axios";
import {TransportersType} from "../types/transporters.type"

interface trans {
    message:string;
    transporter:TransportersType;
}

const useTransporter = () => {
  const getAllTrans = async (): Promise<TransportersType | null> => {
    try {
      let res = await axiosApiInstance.get("/api/transporter/all");
      return res.data.transporter;
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  return {getAllTrans};
};

export default useTransporter;
