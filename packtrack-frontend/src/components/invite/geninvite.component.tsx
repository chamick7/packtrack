import React , { useEffect, useState, useContext } from 'react';
import axiosApiInstance from '../../utils/axios';


const GenInvite = () => {

  const genInviteToken = async () => {
    try {
      let res = await axiosApiInstance.get("/api/user/invite");
      if (res.status === 200 && res.data) {
        console.log(res.data);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }


  return (
    <></>
  )

};

export default GenInvite;
