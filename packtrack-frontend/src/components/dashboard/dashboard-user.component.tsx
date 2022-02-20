import React, { useEffect, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { FaHistory } from "react-icons/fa";


const Packages = [
  {
    id: 0,
    order: 1,
    packagenumber: "ES124574824TH",
    service: "kerry",
    customer: "miw",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 1,
    order: 2,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 2,
    order: 3,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 3,
    order: 4,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 4,
    order: 5,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 5,
    order: 6,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 6,
    order: 7,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 7,
    order: 8,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 8,
    order: 9,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 9,
    order: 10,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 10,
    order: 11,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
  {
    id: 11,
    order: 12,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "arrived",
  },
];



const DashboardUser = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);


  const renderHeader = () =>{
    return (
      <div className="flex flex-row w-full justify-between text-sm">
          <div className="flex flex-row">
            <button className="font-[kanit] bg-main rounded text-white px-3 py-1">
              + ลงทะเบียน
            </button>
            <form>
              <input
                type="text"
                className="font-[kanit] text-base border-2 rounded h-fit mx-2 px-2"
                placeholder="&#xF002; Search Here"
                style={{ fontFamily: "Arial, FontAwesome" }}
              />
              <input
                type="submit"
                value="ค้นหา"
                className="font-[kanit] bg-[#11C6FF] rounded text-white px-3 py-1"
              />
            </form>
          </div>
          <div>
          <button className="flex flex-row justify-center items-center font-[kanit] bg-[#E5E5E5] rounded px-3 py-1">
             <FaHistory className="mx-1" />ประวัติ
            </button>
          </div>
        </div>
    )
  }
  const searchHeader = renderHeader();

  return (
    <div className="flex flex-col justify-center w-full">
      <div>
        <DataTable
          value={Packages}
          selectionMode="checkbox"
          selection={selectedPackage}
          onSelectionChange={(e) => setSelectedPackage(e.value)}
          dataKey="id"
          responsiveLayout="scroll"
          selectionPageOnly
          paginator
          rows={10}
          className="border-2 rounded-t-3xl font-[kanit]"
          header={searchHeader}
          emptyMessage="No Package found."
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3em" , backgroundColor:"#F0304A" , borderRadius: "1.5rem 0 0 0"}}
          ></Column>
          <Column field="order" header="ลำดับ" headerStyle={{backgroundColor:"#F0304A" , color:"white"}} />
          <Column field="packagenumber" header="เลขพัสดุ" headerStyle={{backgroundColor:"#F0304A" , color:"white"}} />
          <Column field="service" header="ผู้ให้บริการ" headerStyle={{backgroundColor:"#F0304A" , color:"white"}} />
          <Column field="customer" header="ชื่อผู้รับ" headerStyle={{backgroundColor:"#F0304A" , color:"white"}} />
          <Column field="contact" header="ช่องทางการติดต่อ" headerStyle={{backgroundColor:"#F0304A" , color:"white"}} />
          <Column field="status" header="สถานะ" headerStyle={{backgroundColor:"#F0304A" , color:"white" , borderRadius: "0 1.5rem 0 0 "}} />
        </DataTable>
      </div>
    </div>
  );
};

export default DashboardUser;
