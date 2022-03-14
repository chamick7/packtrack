import React, { useEffect, useState } from "react";
// import { transporters } from "../../constants/transporter";
import useTransporter from "../../hooks/useTransporter"
import {IoMdClose} from "react-icons/io"
import {TransportersType} from "../../types/transporters.type"

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
  
  const [allTransporters , setAllTransporters] = useState<TransportersType>({
    id:0 ,
    digit:"" ,
    name:"" ,
  })
  const { getAllTrans } = useTransporter();

  const getTransporters = async () => {
    const fetchTransporter = await getAllTrans()
    if(fetchTransporter){
      setAllTransporters(fetchTransporter)
      console.log(allTransporters);
    }
  }

  useEffect(()=> {
    getTransporters();
  },[])


  return (
    <>
      <div className="flex flex-col justify-evenly rounded shadow p-10 border-l-8 border-l-[#D24337]">
        <button
          type="button"
          onClick={() => {
            handleDelete(index);
          }}
          className="flex justify-end mb-2"
        >
          <IoMdClose />
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
            <option className="hidden" selected >
              กรุณาเลือกผู้ให้บริการขนส่งของท่าน
            </option>
            {/* {allTransporters.map((item:TransportersType) => (
              <option key={item.digit} value={item.digit}>
                {item.name}
              </option>
            ))} */}
          </select>
        </div>
      </div>
    </>
  );
};

export default FormRegisterPackage;
