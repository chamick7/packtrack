import React from "react";


import { Link } from "react-router-dom";
import homeImg from "../../images/homeImg.svg"

import "./first-home.scss";

const FirstHome = () => {
  return (
    <div className="container flex flex-col justify-start h-full items-center py-8 px-4 md:flex-row md:h-[90vh] md:justify-around md:w-10/12">
        <div className="flex flex-col justify-start text-center md:justify-center">
          <div>
            <div className="font-[kanit] text-lg md:text-2xl md:text-left">ยินดีต้อนรับเข้าสู่ระบบจัดการพัสดุ</div>
            <div className="font-[kanit] text-7xl py-4 md:text-left"><span className="text-second">Pack</span>Track</div>
            <div className="font-[kanit] text-sm text-start md:w-9/12">
              ระบบจัดการจดหมาย และพัสดุสำนักงานที่มีความสะดวก รวดเร็ว และปลอดภัย
              มีการแจ้งเตือนเมื่อพัสดุถึงสำนักงานแบบ Real Time
            </div>
            <div className="flex justify-center py-8 md:mt-8 md:justify-start">
            <Link to="/login"><button className="bg-second rounded text-white px-12 py-2 text-lg">เข้าสู่ระบบ</button></Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center"><img src={homeImg} className="w-[400px] md:w-[600px]"/></div>
      </div>
  );
};

export default FirstHome;
