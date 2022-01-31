import React from "react";

import "./five-home.scss";
import FiveDetailLeft from "../../images/five-detail-left.jpg"
import FiveDetailRight from "../../images/five-detail-right.jpg"
import FiveDetailUnder from "../../images/five-detail-under.jpg"

const FiveHome = () => {
  return (
    <div id="FiveHome" className="five-container">
      <div className="five-topic">
        <span className="under-line">การใช้</span>งาน
      </div>
      <div className="detail-container">
          <img src={FiveDetailLeft} className="detail-img-left" />
          <img src={FiveDetailRight} className="detail-img-right" />
      </div>
      <div className="detail-under-container"><img src={FiveDetailUnder} className="detail-img-under"/></div>
    </div>
  );
};

export default FiveHome;
