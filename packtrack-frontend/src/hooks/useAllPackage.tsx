import React, { useEffect, useState } from "react";
import axiosApiInstance from "../utils/axios";
import { PackageType } from "../types/package.type";

const useAllPackage = () => {
  const [allPackages, setAllPackages] = useState<PackageType[]>([]);
  const getAllPackages = async () => {
    try {
      let res = await axiosApiInstance.get("/api/package/all");
      setAllPackages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPackages();
  }, []);

  return { allPackages };
};

export default useAllPackage;
