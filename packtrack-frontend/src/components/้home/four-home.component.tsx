import React from "react";

import "./four-home.scss";
import FourImage from "../../images/four-home.jpg";

const FourHome = () => {
  return (
      <>
      <div id="FourHome" className="four-topic">
          <span className="under-line">เกี่ยวกั</span>บ Pack Track
        </div>
    <div className="four-container">
      <div className="four-left-container">
        <img src={FourImage} className="four-image" />
      </div>
      <div className="four-right-container">
        <div className="four-text-desc">
          &emsp;ระบบบริหารและจัดการพัสดุ Pack Track คือระบบการลง<br/>
          ทะเบียนพัสดุของสำนักงานหรือร้านต่าง ๆ โดยจะสามารถบันทึก<br/>
          ข้อมูลพัสดุลงระบบเมื่อพัสดุมาถึง และมีบริการแจ้งเตือนพัสดุให้<br/>
          สมาชิกตามช่องทางการรับการแจ้งเตือนที่กำหนดไว้ในตอนลง<br/>
          ทะเบียนเป็นสมาชิกครั้งแรก<br/><br/>
          &emsp;อีกทั้งยังสามารถมั่นใจได้ว่าพัสดุมาถึงสำนักงานหรือร้านต่าง<br/>
          ๆ จริงเนื่องจากจะมีการบันทึกไว้ในระบบทั้งตอนพัสดุมาถึงหรือ<br/>
          พัสดุนำจ่ายให้สมาชิก โดยสามารถดูได้ว่าพัสดุมาถึงเมื่อไหร่<br/>
          พนักงานคนใดเป็นคนเซ็นรับและนำเข้าระบบ หรือกระทั่งเวลานำ<br/>
          จ่ายให้สมาชิกระบบจะทำการบันทึกเวลา และชื่อของพนักงานผู้นำ<br/>
          จ่ายพัสดุ<br/><br/> 
          &emsp;เพื่อลดโอกาสความผิดพลาด หรือข้อโต้แย้งระหว่างสมาชิก<br/>
          และสำนักงาน อีกทั้งยังสามารถช่วยอำนวยความสะดวกให้กับร้าน<br/>
          ต่าง ๆ ที่ให้บริการรับพัสดุอีกด้วย
        </div>
      </div>
    </div>
    </>
  );
};

export default FourHome;
