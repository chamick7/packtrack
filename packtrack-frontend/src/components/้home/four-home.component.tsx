import React from "react";

import "./four-home.scss";
import FourImage from "../../images/four-home.svg";

const FourHome = () => {
  return (
    <>
      <div
        id="FourHome"
        className="flex flex-col justify-start px-4 md:flex-row md:justify-center md:my-10"
      >
        <div className="flex font-[kanit] text-xl py-4 xl:text-3xl md:hidden">
          <span className="underline underline-offset-2 decoration-main decoration-4">
            เกี่ยวกั
          </span>
          บ Pack Track
        </div>
        <div className="flex justify-center xl:w-5/12">
          <img src={FourImage} className="aspect-square w-fit md:pr-4" />
        </div>
        <div className="flex flex-col my-4 md:w-10/12 md:justify-center xl:w-1/2">
          <div className="hidden font-[kanit] text-xl xl:text-3xl md:flex xl:px-5">
            <span className="underline underline-offset-2 decoration-main decoration-4">
              เกี่ยวกั
            </span>
            บ Pack Track
          </div>
          <div className="font-[kanit] text-md py-4 md:text-sm xl:text-2xl xl:px-5">
            &emsp;ระบบบริหารและจัดการพัสดุ Pack Track คือระบบการลง
            ทะเบียนพัสดุของสำนักงานหรือร้านต่าง ๆ โดยจะสามารถบันทึก
            ข้อมูลพัสดุลงระบบเมื่อพัสดุมาถึง และมีบริการแจ้งเตือนพัสดุให้
            สมาชิกตามช่องทางการรับการแจ้งเตือนที่กำหนดไว้ในตอนลง
            ทะเบียนเป็นสมาชิกครั้งแรก
            <br />
            <br />
            &emsp;อีกทั้งยังสามารถมั่นใจได้ว่าพัสดุมาถึงสำนักงานหรือร้านต่าง ๆ
            จริงเนื่องจากจะมีการบันทึกไว้ในระบบทั้งตอนพัสดุมาถึงหรือ
            พัสดุนำจ่ายให้สมาชิก โดยสามารถดูได้ว่าพัสดุมาถึงเมื่อไหร่
            พนักงานคนใดเป็นคนเซ็นรับและนำเข้าระบบ หรือกระทั่งเวลานำ
            จ่ายให้สมาชิกระบบจะทำการบันทึกเวลา และชื่อของพนักงานผู้นำ จ่ายพัสดุ
            <br />
            <br />
            &emsp;เพื่อลดโอกาสความผิดพลาด หรือข้อโต้แย้งระหว่างสมาชิก
            และสำนักงาน อีกทั้งยังสามารถช่วยอำนวยความสะดวกให้กับร้าน ต่าง ๆ
            ที่ให้บริการรับพัสดุอีกด้วย
          </div>
        </div>
      </div>
    </>
  );
};

export default FourHome;
