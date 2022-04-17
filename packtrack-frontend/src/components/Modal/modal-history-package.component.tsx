import React from "react";

import { Package } from "../../types/package";
import { Dialog } from "primereact/dialog";

interface HistoryPackage {
  historyPackage:Package
  historyVisible: boolean;
  historyOnClose: () => void;
}

const ModalHistoryPackage:React.FC<HistoryPackage> = ({ historyPackage, historyVisible, historyOnClose}) => {
  console.log(historyPackage);
  return (
    <>
    <Dialog visible={historyVisible} draggable={false} onHide={historyOnClose} className="w-1/2">
        <div className="flex flex-row justify-evenly">
            <div className="flex flex-col justify-evenly">
                <div>ลำดับ</div>
                <div>ผู้ให้บริการ</div>
                <div>เลขพัสดุ</div>
                <div>ชื่อผู้รับ</div>
                <div>ช่องทางการแจ้งเตือน</div>
                <div>พนักงานผู้รับพัสดุ</div>
                <div>พนักงานผู้นำจ่ายพัสดุ</div>
                <div>สถานะ</div>
            </div>
            <div className="flex flex-col justify-evenly">
                <div>{historyPackage.order}</div>
                <div>{historyPackage.service}</div>
                <div>{historyPackage.packageNumber}</div>
                <div>{historyPackage.customer}</div>
                <div>{historyPackage.contact}</div>
                <div>เอาไงดีวะ</div>
                <div>ไอ้มิว</div>
                <div>{historyPackage.status}</div>
            </div>
        </div>
    </Dialog>
    </>
  );
};

export default ModalHistoryPackage;
