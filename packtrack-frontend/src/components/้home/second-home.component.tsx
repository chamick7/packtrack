import React from "react";

import backgroundHome from "../../images/backgroundHome.svg";

import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import line from "../../images/line.svg"
import sms from "../../images/sms.svg"

const SecondHome = () => {
  return (
    <div
      className="flex flex-col justify-center h-screen items-center md:h-fit md:flex-row xl:h-screen"
      // style={{ backgroundImage: `url(${backgroundHome})` }}
    >
      <img
        src={backgroundHome}
        alt="bg-svg"
        className="absolute object-cover z-[-99999999999999999] h-[120vh] md:w-auto md:h-auto"
      />
      <div className="flex flex-col md:justify-center md:items-center md:w-1/2">
        <img src={phone} className="w-fit p-3 my-8 md:w-10/12 md:p-0 md:my-0 xl:w-8/12" />
      </div>
      <div className="flex flex-col text-center">
        <div className="font-[kanit] text-lg text-white xl:text-3xl xl:pb-20">
          บริการแจ้งเตือนเมื่อพัสดุของท่านถึงที่หมาย
        </div>
        <div className="flex flex-row justify-around pt-4 xl:h-40">
          <div className="flex flex-col justify-between">
            <img src={email} className="aspect-square w-fit xl:w-24" />
            <div className="font-[kanit] text-lg text-white xl:text-2xl">Email</div>
          </div>
          <div className="flex flex-col justify-between">
            <img src={line} className="aspect-square w-fit xl:w-20" />
            <div className="font-[kanit] text-lg text-white xl:text-2xl">Line</div>
          </div>
          <div className="flex flex-col justify-between">
            <img src={sms} className="aspect-square w-fit xl:w-20" />
            <div className="font-[kanit] text-lg text-white xl:text-2xl">SMS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHome;
