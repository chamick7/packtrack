import React, { useEffect, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { FaHistory } from "react-icons/fa";

import ModalRegisterPackage from "../modal/modal-register-package.component";
import ModalHistoryPackage from "../modal/modal-history-package.component";
import { PackageType } from "../../types/package.type";
import usePackage from "../../hooks/usePackage";
import axiosApiInstance from "../../utils/axios";

const INIT_FILTER = {
  global: { value: "", matchMode: FilterMatchMode.CONTAINS },
  order: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  packageNumber: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  customer: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  status: { value: "received", matchMode: FilterMatchMode.NOT_CONTAINS },
};

const DashboardUser = () => {
  const [loading,setLoading] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageType[]>([]);
  const [onHistoryComp, setOnHistoryComp] = useState<boolean>(false);
  const toggleHistoryComp = () => {
    setOnHistoryComp(!onHistoryComp);
  };

  useEffect(() => {
    setFilterValue({
      ...INIT_FILTER,
      status: {
        value: "received",
        matchMode: onHistoryComp
          ? FilterMatchMode.CONTAINS
          : FilterMatchMode.NOT_CONTAINS,
      },
    });
  }, [onHistoryComp]);

  const [filterValue, setFilterValue] = useState(INIT_FILTER);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filter = { ...filterValue };
    filterValue["global"].value = value;

    setFilterValue(filter);
    setGlobalFilterValue(value);
  };

  const [registerModal, setRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const renderHeader = () => {
    return (
      <div className="flex flex-row w-full justify-between text-sm">
        <div className="flex flex-row">
          <button
            className="font-[kanit] bg-main rounded text-white px-3 py-1"
            onClick={toggleRegisterModal}
          >
            + ลงทะเบียน
          </button>
          <input
            type="text"
            className="font-[kanit] text-base border-2 rounded h-fit mx-2 px-2"
            placeholder="&#xF002; Search Here"
            style={{ fontFamily: "Arial, FontAwesome" }}
            value={globalFilterValue}
            onChange={onFilterChange}
          />
        </div>
        <div>
          <button
            className="flex flex-row justify-center items-center font-[kanit] bg-[#E5E5E5] rounded px-3 py-1"
            onClick={toggleHistoryComp}
          >
            <FaHistory className="mx-1" />
            ประวัติ
          </button>
        </div>
      </div>
    );
  };
  const searchHeader = renderHeader();
  const renderHistoryHeader = () => {
    return (
      <div className="flex flex-row w-full justify-between text-sm">
        <div className="flex flex-row">
          <button
            className="font-[kanit] bg-main rounded text-white px-3 py-1"
            onClick={toggleRegisterModal}
          >
            + ลงทะเบียน
          </button>
          <input
            type="text"
            className="font-[kanit] text-base border-2 rounded h-fit mx-2 px-2"
            placeholder="&#xF002; Search Here"
            style={{ fontFamily: "Arial, FontAwesome" }}
            value={globalFilterValue}
            onChange={onFilterChange}
          />
        </div>
        <div>
          <button
            className="flex flex-row justify-center items-center text-white font-[kanit] bg-main rounded px-3 py-1"
            onClick={toggleHistoryComp}
          >
            <FaHistory className="mx-1" />
            ประวัติ
          </button>
        </div>
      </div>
    );
  };
  const searchHistoryHeader = renderHistoryHeader();

  const statusBody = (rowData: any) => {
    if (rowData.status === "assigned") {
      return (
        <span className="bg-[#FFC711] w-full rounded-lg py-1 text-white text-center">
          รอการจัดส่ง
        </span>
      );
    } else if (rowData.status === "arrived") {
      return (
        <span className="bg-[#11C6FF] w-full rounded-lg py-1 text-white text-center">
          พัสดุถึงสำนักงาน
        </span>
      );
    } else if (rowData.status === "exported") {
      return (
        <span className="bg-[#F9A512] w-full rounded-lg py-1 text-white text-center">
          รอการยืนยัน
        </span>
      );
    } else if (rowData.status === "received") {
      return (
        <span className="bg-[#10C167] w-full rounded-lg py-1 text-white text-center">
          จ่ายสำเร็จ
        </span>
      );
    } else {
      return <span>-</span>;
    }
  };

  const receieving = async () => {
    setLoading(true)
    const packagesId = selectedPackage.map(el => (el.id))
    try{
      let res = await axiosApiInstance.post("/api/package/receive", {packagesId});
      if(res.status === 200){
        setLoading(false)
      }
    }
    catch(err){
      console.log(err);
    }
  };

  const footerButton = () => {
    return (
      <div className="flex justify-end">
        <button
          className="font-[kanit] bg-[#11C6FF] rounded text-white px-3 py-1"
          onClick={receieving}
        >
          รับพัสดุ
        </button>
      </div>
    );
  };

  const [historyModal, setHistoryModal] = useState(false);
  const toggleHistoryModal = () => {
    setHistoryModal(!historyModal);
  };
  const [dataHistoryPackage, setDataHistoryPackage] = useState<PackageType>({
    id:0,
    trackingNumber:"",
    status:"",
    notification:"",
    importedAt:"",
    exportedAt:"",
    receivedAt:"",
    createdAt:"",
    updatedAt:"",
    transporter: {
      id:0,
      digit:"",
      name:"",
  },
    receiver: {
        id:0,
        email:"",
        firstName:"",
        lastName:"",
    },
    importer:{
        firstName:"",
        lastName:"",
    },
    exporter:{
        firstName:"",
        lastName:"",
    },
  });
  const showHistoryModal = (data: PackageType) => {
    toggleHistoryModal();
    setDataHistoryPackage(data);
  };

  const { packages } = usePackage(loading);

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        {onHistoryComp === false && (
          <DataTable
            value={packages}
            selectionMode="checkbox"
            selection={selectedPackage}
            onSelectionChange={(e) => setSelectedPackage(e.value)}
            dataKey="id"
            selectionPageOnly
            sortField="status"
            sortOrder={-1}
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
              field="id"
              header="ลำดับ"
              headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
              sortable
            />
            <Column
              field="trackingNumber"
              header="เลขพัสดุ"
              headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
              sortable
            />
            <Column
              field="transporter.name"
              header="ผู้ให้บริการ"
              headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
              sortable
            />
            <Column
              field="receiver.firstName"
              header="ชื่อผู้รับ"
              headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
              sortable
            />
            <Column
              field="notification"
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
        )}
        {onHistoryComp === true && (
          <DataTable
            value={packages}
            selectionMode="checkbox"
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
            header={searchHistoryHeader}
            filters={filterValue}
            emptyMessage="No Package found."
            onRowClick={(e) => showHistoryModal(e.data)}
          >
            <Column
              field="id"
              header="ลำดับ"
              headerStyle={{
                backgroundColor: "#F0304A",
                color: "white",
                width: "3em",
                borderRadius: "1.5rem 0 0 0",
              }}
              sortable
            />
            <Column
              field="trackingNumber"
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
              field="receiver.firstName"
              header="ชื่อผู้รับ"
              headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
              sortable
            />
            <Column
              field="notification"
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
        )}
      </div>

      <ModalRegisterPackage
        registerVisible={registerModal}
        registerOnClose={toggleRegisterModal}
        setStateLoading={setLoading}
      />
      <ModalHistoryPackage
        historyPackage={dataHistoryPackage}
        historyVisible={historyModal}
        historyOnClose={toggleHistoryModal}
      />
    </>
  );
};

export default DashboardUser;
