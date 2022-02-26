import React from "react";

import { Dialog } from "primereact/dialog";

interface HistoryPackage {
  historyVisible: boolean;
  historyOnClose: () => void;
}

const ModalHistoryPackage:React.FC<HistoryPackage> = ({ historyVisible, historyOnClose}) => {
  return (
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
                <div>1,936</div>
                <div>Thai Post</div>
                <div>ES</div>
                <div>จักร</div>
                <div>E-mail</div>
                <div>สมจิตร</div>
                <div>มีชัย</div>
                <div>จ่ายสำเร็จ</div>
            </div>
        </div>
    </Dialog>
  );
};

export default ModalHistoryPackage;
