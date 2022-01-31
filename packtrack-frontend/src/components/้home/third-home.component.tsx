import React from "react";

import "./third-home.scss";

import ThirdHomeLeft from "../../images/third-home-left.jpg"
import ThirdHomeRight from "../../images/third-home-right.jpg"

const ThirdHome = () => {
  return (
    <div className="third-container">
      <div className="third-topic">
        <span className="under-line">หน่วย</span>งานที่เลือกใช้บริการของเรา . .
        <div className="third-img-container"><img src={ThirdHomeLeft} className="third-img-left" /><img src={ThirdHomeRight} className="third-img-right" /></div>
      </div>
    </div>
  );
};

export default ThirdHome;
