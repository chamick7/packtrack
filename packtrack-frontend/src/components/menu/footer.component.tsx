import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center p-4">
      {/* <div>logo</div>
      <div className="about-container">
        <div className="about-topic">เกี่ยวกับเรา</div>
        <div>
          ระบบจัดการพัสดุสำนักงานที่มีความสะดวก รวดเร็ว และปลอดภัย
          มีการแจ้งเตือนเมื่อพัสดุถึงสำนักงานแบบ Real Time
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-topic">หน้าหลัก</div>
        <nav className="menu-link">
        <ScrollLink
            to="FourHome"
            smooth={true}
            offset={-50}
            duration={800}
          >
            เกี่ยวกับ Pack Track
          </ScrollLink>
        </nav>
        <nav className="menu-link">
        <ScrollLink
            to="FiveHome"
            smooth={true}
            offset={-50}
            duration={800}
          >
            การใช้งาน
          </ScrollLink>
        </nav>
      </div>
      <div className="contact-container">
        <div className="contact-topic">ติดต่อ</div>
        <div>
          ห้อง 1007 ชั้น 10 อาคาร 12 ชั้น 1 ซอย ฉลองกรุง 1
          แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
        </div>
        <div>
          <span className="bold-contact">Email</span> :
          packtrack123456@gmail.com
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
