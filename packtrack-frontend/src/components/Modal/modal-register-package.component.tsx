import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import _ from "lodash";
import FormRegisterPackage from "../form/form-regis-package.component";
import {GrAddCircle} from "react-icons/gr"
import axiosApiInstance from "../../utils/axios";

interface RegisterPackageProps {
  registerVisible: boolean;
  registerOnClose: () => void;
}

interface RegisPackage {
  packageId?: string;
  trackingNumber: string;
  transporterDigit: string;
}

const ModalRegisterPackage: React.FC<RegisterPackageProps> = ({
  registerVisible,
  registerOnClose,
}) => {
  const [packages, setPackages] = useState<RegisPackage[]>([
    { packageId: _.uniqueId(), trackingNumber: "", transporterDigit: "" },
  ]);
  const headerText = (
    <span className="flex justify-center font-[kanit] text-[#5ECEFF] text-2xl">
      ลงทะเบียนพัสดุ
    </span>
  );

  const handleChangeTrackingNumber = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clonePackages = [...packages];
    clonePackages[index].trackingNumber = event.target.value;
    setPackages(clonePackages);
  };

  const handleChangeTransporter = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const clonePackages = [...packages];
    clonePackages[index].transporterDigit = event.target.value;
    setPackages(clonePackages);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      let res = await axiosApiInstance.post("/api/package/assign",{packages});
      if (res.status === 201){
        registerOnClose();
      }
    }
    catch(err){
      console.log(err);
    }
  };

  const handleIncrease = () => {
    const original = { packageId: _.uniqueId(), trackingNumber: "", transporterDigit: "" };
    setPackages((packages) => [...packages, original]);
  };

  const handleDelete = (index: number) => {
    const clonePackages = [...packages];
    clonePackages.splice(index, 1);
    if (packages.length > 1) {
      setPackages(clonePackages);
    }
  };

  return (
    <Dialog
      header={headerText}
      visible={registerVisible}
      draggable={false}
      className="w-1/2"
      onHide={registerOnClose}
    >
      <form onSubmit={handleSubmit}>
        {packages.map((item, index) => (
          <FormRegisterPackage
            key={item.packageId}
            index={index}
            handleChangeTrackingNumber={handleChangeTrackingNumber}
            handleChangeTransporter={handleChangeTransporter}
            trackingNumber={item.trackingNumber}
            transporter={item.transporterDigit}
            handleDelete={handleDelete}
          />
        ))}
        <button type="button" onClick={handleIncrease} className="flex w-full justify-center mt-4">
          <GrAddCircle className="text-3xl text-main" />
        </button>

        <div className="flex flex-row justify-center mt-5">
          <input
            type="submit"
            value="ยืนยัน"
            className="bg-[#005DFF] rounded font-[kanit] text-white px-10 py-1"
          />
        </div>
      </form>
    </Dialog>
  );
};

export default ModalRegisterPackage;
