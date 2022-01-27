import React from "react";

import backgroundHome from "../../images/backgroundHome.jpg";
import holdphone from "../../images/holdphone.jpg";
import phone from "../../images/phone.svg";
import guide from "../../images/guide.svg"

import "./second-home.scss";

const SecondHome = () => {
  return (
    <div
      className="container-fluid second-container"
      style={{ backgroundImage: `url(${backgroundHome})` }}
    >
      <div className="second-left-container">
        <img src={phone} className="second-image-left" />
      </div>
      <div className="second-right-container">
        <div className="second-line-one">บริการแจ้งเตือนเมื่อพัสดุของท่านถึงที่หมาย</div>
        <div className="second-guide-container"><img src={guide} className="second-guide-image"/></div>
      </div>
    </div>
  );
};

export default SecondHome;
