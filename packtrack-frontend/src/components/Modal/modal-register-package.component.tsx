import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";

import { transporters } from "../../constants/transporter";

interface RegisterPackageProps {
  registerVisible: boolean;
  registerOnClose: () => void;
}

const ModalRegisterPackage: React.FC<RegisterPackageProps> = ({
  registerVisible,
  registerOnClose,
}) => {
  const headerText = (
    <span className="flex justify-center font-[kanit] text-[#5ECEFF] text-2xl">
      ลงทะเบียนพัสดุ
    </span>
  );

  return (
    <Dialog
      header={headerText}
      visible={registerVisible}
      draggable={false}
      className="w-1/2"
      onHide={registerOnClose}
    >
      <form>
        <div className="flex flex-col justify-evenly rounded shadow p-10 border-l-8 border-l-[#D24337]">
          <div className="flex flex-row justify-evenly items-center font-[kanit]">
            <label className="w-1/2">เลขติดตามพัสดุ (Track & Trace)</label>
            <input
              type="text"
              className="rounded border-2 text-sm p-2 w-1/2 text-center"
              placeholder="กรุณากรอกเลขติดตามพัสดุของท่าน"
              value="trackingNumber"
            />
          </div>
          <div className="flex flex-row justify-evenly items-center font-[kanit] mt-1">
            <label className="w-1/2">ผู้ให้บริการขนส่ง</label>
            <select value="transporterDigit" className="rounded border-2 text-sm p-2 w-1/2 text-center">
              <option className="hidden" selected>
                กรุณาเลือกผู้ให้บริการขนส่งของท่าน
              </option>
              {transporters.map((transporter) => (
                <option value={transporter.digit}>{transporter.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-5">
        <input type="submit" value="ยืนยัน" className="bg-[#005DFF] rounded font-[kanit] text-white px-10 py-1" />
        </div>
      </form>
    </Dialog>
  );
};

export default ModalRegisterPackage;
