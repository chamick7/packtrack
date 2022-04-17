import React, { useContext, useEffect, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
// import { FaHistory } from "react-icons/fa";
// import { Dropdown } from "primereact/dropdown";
import { Calendar } from 'primereact/calendar';

import AuthContext from "../../providers/auth.provider";
import ModalRegisterUser from "../modal/modal-register-user.component";
import userPicture from "../../images/user-picture.svg";

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
    status: "assigned",
  },
  {
    id: 2,
    order: 3,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "pending",
  },
  {
    id: 3,
    order: 4,
    packagenumber: "ES124574824TH",
    service: "flash",
    customer: "nattawat",
    contact: "e-mail",
    status: "received",
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

const DashboardOfficer = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [filterValue, setFilterValue] = useState({
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
    order: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    packagenumber: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    customer: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status:{ value: null, matchMode: FilterMatchMode.STARTS_WITH }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filter = { ...filterValue };
    filterValue["global"].value = value;

    setFilterValue(filter);
    setGlobalFilterValue(value);
  };
  
  const [statusFilterValue , setStatusFilterValue] = useState("")
  const onStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let filter = { ...filterValue };
    filterValue["global"].value = value;

    setFilterValue(filter);
    setStatusFilterValue(value);
  };

  const [date , setDate] = useState<Date | Date[] | undefined>(undefined);

  const [registerModal, setRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const [historyModal, setHistoryModal] = useState(false);
  const toggleHistoryModal = () => {
    setHistoryModal(!historyModal);
  };

  const GetUser = () => {
    const authContext = useContext(AuthContext);
    const firstName = authContext.user?.firstName;
    const userId = authContext.user?.id;

    return (
      <>
        <div className="flex items-center">
          <div className="flex flex-row justify-between items-center font-[kanit] px-2 border-r-4 border-r-[#8CD8F9] mr-6">
            <div className="flex flex-col">
              <div className="text-2xl text-[#8CD8F9]">{firstName}</div>
              <div className="text-sm">รหัสผู้ใช้งาน {userId}</div>
            </div>
            <img src={userPicture} className="h-12" alt="user" />
          </div>
        </div>
      </>
    );
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-row w-full justify-between items-center text-sm">
        <div className="flex flex-row items-center md:w-2/3">
          <button
            className="font-[kanit] bg-main rounded w-3/12 text-white  px-1 py-1"
            onClick={toggleRegisterModal}
          >
            <span className="flex justify-center items-center md:hidden">+</span><span className="hidden md:flex md:text-xs md:justify-center md:items-center">+ ผู้ใช้งานใหม่</span>
          </button>
          <input
            type="text"
            className="font-[kanit] text-base border-2 rounded w-3/12 h-fit mx-2 px-2 md:w-1/3"
            placeholder="&#xF002; Search Here"
            style={{ fontFamily: "Arial, FontAwesome" }}
            value={globalFilterValue}
            onChange={onFilterChange}
          />
          <select value={statusFilterValue} onChange={onStatusFilterChange} className="w-3/12">
            <option value="">แสดงสถานะทั้งหมด</option>
            <option value="assigned">รอการจัดส่ง</option>
            <option value="arrived">พัสดุถึงสำนักงาน</option>
            <option value="pending">รอการยืนยัน</option>
            <option value="received">จ่ายสำเร็จ</option>
          </select>
          <Calendar showButtonBar placeholder="แสดงวันทั้งหมด" value={date} onChange={(e:any) => setDate(e.value)} dateFormat="dd/mm/yy" className="w-3/12"/>
        </div>
        <div className="hidden md:flex md:h-10 md:w-fit">
          <GetUser />
        </div>
      </div>
    );
  };
  const searchHeader = renderHeader();

  const statusBody = (rowData: any) => {
    if (rowData.status === "assigned") {
      return (
        <span className="bg-[#FFC711] w-full rounded-lg py-1 text-white text-center">
          รอการจัดส่ง
        </span>
      );
    } else if (rowData.status === "arrived") {
      return (
        <span className="bg-[#11C6FF] w-full rounded-lg py-1 text-white  text-center">
          พัสดุถึงสำนักงาน
        </span>
      );
    } else if (rowData.status === "pending") {
      return (
        <span className="bg-[#F9A512] w-full rounded-lg py-1 text-white  text-center">
          รอการยืนยัน
        </span>
      );
    } else if (rowData.status === "received") {
      return (
        <span className="bg-[#10C167] w-full rounded-lg py-1 text-white  text-center">
          จ่ายสำเร็จ
        </span>
      );
    } else {
      return <span>-</span>;
    }
  };

  const arriving = () => {
    console.log("select", selectedPackage);
  };

  const recieving = () => {
    console.log("select", selectedPackage);
  };

  const footerButton = () => {
    return (
      <div className="flex justify-end w-fit">
        <div className="flex w-5/12 justify-around lg:w-6/12">
          <button
            className="font-[kanit] bg-[#11C6FF] rounded text-white px-3 py-1"
            onClick={arriving}
          >
            รับพัสดุ
          </button>
          <button
            className="font-[kanit] bg-[#005DFF] rounded text-white px-3 py-1"
            onClick={recieving}
          >
            จ่ายพัสดุ
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <DataTable
          value={Packages}
          selectionMode="checkbox"
          selection={selectedPackage}
          onSelectionChange={(e) => setSelectedPackage(e.value)}
          dataKey="id"
          selectionPageOnly
          paginator
          paginatorRight={footerButton}
          scrollable
          scrollHeight="flex"
          responsiveLayout="scroll"
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          className="border-2 rounded-t-3xl font-[kanit]"
          header={searchHeader}
          filters={filterValue}
          emptyMessage="No Package found."
        >
          <Column
            selectionMode="multiple"
            headerStyle={{
              width: "3em",
              backgroundColor: "#F0304A",
              borderRadius: "1.5rem 0 0 0",
            }}
          ></Column>
          <Column
            field="order"
            header="ลำดับ"
            headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
            sortable
          />
          <Column
            field="packagenumber"
            header="เลขพัสดุ"
            headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
            sortable
          />
          <Column
            field="service"
            header="ผู้ให้บริการ"
            headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
            sortable
          />
          <Column
            field="customer"
            header="ชื่อผู้รับ"
            headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
            sortable
          />
          <Column
            field="contact"
            header="ช่องทางการติดต่อ"
            headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
            sortable
          />
          <Column
            field="status"  
            body={statusBody}
            header="สถานะ"
            sortable
            headerStyle={{
              backgroundColor: "#F0304A",
              color: "white",
              borderRadius: "0 1.5rem 0 0 ",
            }}
            className="flex justify-center w-full text-center"
          />
        </DataTable>
      </div>

      <ModalRegisterUser
        registerVisible={registerModal}
        registerOnClose={toggleRegisterModal}
      />
    </>
  );
};

export default DashboardOfficer;
