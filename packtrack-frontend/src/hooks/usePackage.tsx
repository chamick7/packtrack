import React, { useEffect, useState } from 'react'
import axiosApiInstance from '../utils/axios'
import { PackageType } from '../types/package.type'

const usePackage = () => {
  const [packages , setPackages] = useState<PackageType[]>([]);

  const getPackages = async () =>{
    try {
      let res = await axiosApiInstance.get(
        "/api/package/me"
      );
      setPackages(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPackages();
  }, []);

  return { packages };
}

export default usePackage