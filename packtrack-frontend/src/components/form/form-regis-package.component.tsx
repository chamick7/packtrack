import React from "react";
import { transporters } from "../../constants/transporter";

interface Props {
  handleChangeTrackingNumber: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleChangeTransporter: (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
  handleDelete: (index: number) => void;
  trackingNumber: string;
  transporter: string;
  index: number;
}

const FormRegisterPackage: React.FC<Props> = (props) => {
  const {
    handleChangeTrackingNumber,
    handleChangeTransporter,
    trackingNumber,
    transporter,
    index,
    handleDelete,
  } = props;
  return (
    <>
      <div className="flex flex-col justify-evenly rounded shadow p-10 border-l-8 border-l-[#D24337]">
        <button
          type="button"
          onClick={() => {
            handleDelete(index);
          }}
        >
          remove
        </button>
        <div className="flex flex-row justify-evenly items-center font-[kanit]">
          <label className="w-1/2">เลขติดตามพัสดุ (Track & Trace)</label>
          <input
            type="text"
            className="rounded border-2 text-sm p-2 w-1/2 text-center"
            placeholder="กรุณากรอกเลขติดตามพัสดุของท่าน"
            value={trackingNumber}
            onChange={(e) => {
              handleChangeTrackingNumber(e, index);
            }}
          />
        </div>
        <div className="flex flex-row justify-evenly items-center font-[kanit] mt-1">
          <label className="w-1/2">ผู้ให้บริการขนส่ง</label>
          <select
            value={transporter}
            className="rounded border-2 text-sm p-2 w-1/2 text-center"
            onChange={(e) => {
              handleChangeTransporter(e, index);
            }}
          >
            <option className="hidden" selected>
              กรุณาเลือกผู้ให้บริการขนส่งของท่าน
            </option>
            {transporters.map((transporter) => (
              <option key={transporter.digit} value={transporter.digit}>
                {transporter.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FormRegisterPackage;
