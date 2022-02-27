import React from "react";

import fiveHomeGuide from "../../images/five-home-guide.svg";
import fiveHomeOrder from "../../images/five-home-order.svg";
import membership from "../../images/membership.svg";
import orderDelivery from "../../images/order-delivery.svg";
import place from "../../images/place.svg";

const FiveHome = () => {
  return (
    <div id="FiveHome" className="flex flex-col justify-center px-4 my-4">
      <div className="font-[kanit] text-xl py-4 xl:text-3xl ">
        <span className="underline underline-offset-2 decoration-main decoration-4">
          การใช้
        </span>
        งาน
      </div>
      <div className="flex flex-col my-2 md:flex-row md:justify-evenly md:my-0">
        <div className="flex flex-col justify-between md:w-8/12 md:justify-center xl:w-1/2">
          <div className="flex flex-row justify-center">
            <img src={fiveHomeOrder} className="aspect-square w-3/12 md:w-4/12 xl:w-3/12" />
            <div className="flex flex-col justify-between py-2">
              <div className="font-[kanit] text-sm md:text-lg xl:text-2xl">ติดต่อสำนักงานเพื่อลงทะเบียนสมาชิกใหม่</div>
              <div className="font-[kanit] text-sm md:text-lg xl:text-2xl">กรอกข้อมูลและเลือกช่องทางการแจ้งเตือน</div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 xl:w-1/2">
        <img src={fiveHomeGuide} className="aspect-video w-fit" />
        </div>
      </div>
      <div className="flex flex-row justify-between my-10 md:justify-evenly md:my-36">
        <div className="flex flex-col justify-between items-center md:w-1/12 ">
          <img src={membership} className="aspect-square w-fit" />
          <div className="font-[kanit] text-xl text-main text-center">7302</div>
          <div className="font-[kanit] text-md text-center">ผู้ลงทะเบียน</div>
        </div>
        <div className="flex flex-col justify-between items-center md:w-1/12">
          <img src={orderDelivery} className="aspect-square w-fit" />
          <div className="font-[kanit] text-xl text-main text-center">20,125</div>
          <div className="font-[kanit] text-md text-center">รายการ</div>
        </div>
        <div className="flex flex-col justify-between items-center md:w-1/12">
          <img src={place} className="aspect-square w-fit" />
          <div className="font-[kanit] text-xl text-main text-center">65</div>
          <div className="font-[kanit] text-md text-center">ผู้ใช้บริการ</div>
        </div>
      </div>
    </div>
  );
};

export default FiveHome;
