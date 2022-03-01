import React from "react";

import { Dialog } from "primereact/dialog";
import GenInvite from "../invite/geninvite.component";

interface RegisterUser {
  registerVisible: boolean;
  registerOnClose: () => void;
}

const ModalRegisterUser: React.FC<RegisterUser> = ({
  registerVisible,
  registerOnClose,
}) => {
  const headerText = (
    <span className="flex justify-center font-[kanit] font-extralight text-2xl">
      เพิ่มสมาชิกใหม่
    </span>
  );

  return (
    <Dialog
      header={headerText}
      visible={registerVisible}
      draggable={false}
      onHide={registerOnClose}
      className="w-1/2"
    >
      <div>
        <GenInvite />
      </div>
    </Dialog>
  );
};

export default ModalRegisterUser;
