import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import logoPackTrack from "../../images/logoPackTrack.svg"

const Footer = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row">
      <div className="flex flex-col justify-center items-center bg-white my-2 md:w-2/12">
        <img src={logoPackTrack} className="aspect-square w-2/12 md:w-4/12 xl:w-3/12" />
        <div className="flex flex-row font-[kanit] text-2xl md:text-xl">
            <span className="text-main">
              Pack
            </span>
            Track
          </div>
        </div>
        <div className="flex flex-col bg-third p-2 md:flex-row  md:w-10/12">
      <div className="flex flex-col font-[kanit] text-white my-2 md:w-5/12 md:px-1">
        <div className="text-lg">เกี่ยวกับเรา</div>
        <div className="text-sm leading-5">
          ระบบจัดการพัสดุสำนักงานที่มีความสะดวก รวดเร็ว และปลอดภัย
          มีการแจ้งเตือนเมื่อพัสดุถึงสำนักงานแบบ Real Time
        </div>
      </div>
      <div className="flex flex-col font-[kanit] text-white my-2 md:w-2/12  md:px-1">
        <div className="text-lg">หน้าหลัก</div>
        <nav className="text-sm underline underline-offset-2 my-1 cursor-pointer">
        <ScrollLink
            to="FourHome"
            smooth={true}
            offset={-50}
            duration={800}
          >
            เกี่ยวกับ Pack Track
          </ScrollLink>
        </nav>
        <nav className="text-sm underline underline-offset-2 my-1 cursor-pointer">
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
      <div className="flex flex-col font-[kanit] text-white my-2 md:w-5/12  md:px-1">
        <div className="text-lg">ติดต่อ</div>
        <div className="text-sm leading-5">
          ห้อง 1007 ชั้น 10 อาคาร 12 ชั้น 1 ซอย ฉลองกรุง 1
          แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
        </div>
        <div className="text-sm my-2">
          <span className="text-lg">Email</span> :
          packtrack123456@gmail.com
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
