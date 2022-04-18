import React from "react";

import { PackageType } from "../../types/package.type";
import { Dialog } from "primereact/dialog";

interface HistoryPackage {
  historyPackage:PackageType
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
                {historyPackage.id ? <span>{historyPackage.id}</span> : <span>-</span>}
                {historyPackage.trackingNumber ? <span>{historyPackage.trackingNumber}</span> : <span>-</span>}
                {historyPackage.trackingNumber ? <span>{historyPackage.trackingNumber}</span> : <span>-</span>}
                {`${historyPackage.receiver.firstName + " " + historyPackage.receiver.lastName}` ? <span>{historyPackage.receiver.firstName + " " + historyPackage.receiver.lastName}</span> : <span>-</span>}
                {historyPackage.notification ? <span>{historyPackage.notification}</span> : <span>-</span>}
                {`${historyPackage.importer.firstName + " " + historyPackage.importer.lastName}` ? <span>{historyPackage.importer.firstName + " " + historyPackage.importer.lastName}</span> : <span>-</span>}
                {`${historyPackage.exporter.firstName + " " + historyPackage.exporter.lastName}` ? <span>{historyPackage.exporter.firstName + " " + historyPackage.exporter.lastName}</span> : <span>-</span>}
                {historyPackage.status ? <span>{historyPackage.status}</span> : <span>-</span>}
            </div>
        </div>
    </Dialog>
    </>
  );
};

export default ModalHistoryPackage;
