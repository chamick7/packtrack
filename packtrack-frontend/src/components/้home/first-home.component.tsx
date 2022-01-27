import React from "react";


import { Link } from "react-router-dom";
import homeImg from "../../images/homeImg.jpg"

import "./first-home.scss";

const FirstHome = () => {
  return (
    <div className="container-fluid firsthome-container">
        <div className="left-container">
          <div>
            <div className="line-one">ยินดีต้อนรับเข้าสู่ระบบจัดการพัสดุ</div>
            <div className="line-two"><span className="main-color">Pack</span>Track</div>
            <div className="line-thr">
              ระบบจัดการจดหมาย และพัสดุสำนักงานที่มีความสะดวก รวดเร็ว และปลอดภัย<br />
              มีการแจ้งเตือนเมื่อพัสดุถึงสำนักงานแบบ Real Time
            </div>
            <div className="button-container">
            <Link to="/login"><button className="button-login">เข้าสู่ระบบ</button></Link>
            </div>
          </div>
        </div>
        <div className="right-container"><img src={homeImg} className="image"/></div>
      </div>
  );
};

export default FirstHome;
