import React from "react";
import axiosApiInstance from "../utils/axios";
import {Transporters} from "../types/transporters.type"

interface trans {
    message:string;
    transporter:Transporters;
}

const useTransporter = () => {
  const getAllTrans = async (): Promise<trans | null> => {
    try {
      let res = await axiosApiInstance.get("/api/transporter/all");
      console.log(res.data);
      return res.data.transporter;
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  return {getAllTrans};
};

export default useTransporter;
