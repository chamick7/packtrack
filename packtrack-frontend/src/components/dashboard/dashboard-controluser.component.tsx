import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { IoTrashBin } from "react-icons/io5";
import { confirmDialog } from 'primereact/confirmdialog';

import ModalAddRole from "../modal/modal-add-role.component";
import useMembers from "../../hooks/useMembers";
import useOfficers from "../../hooks/useOfficers";
import axiosApiInstance from "../../utils/axios";

interface ControlUser {
  role:string | undefined ;
}

const DashboardControlUser:React.FC<ControlUser> = ({role}) => {
  const [filterValue, setFilterValue] = useState({
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filter = { ...filterValue };
    filterValue["global"].value = value;

    setFilterValue(filter);
    setGlobalFilterValue(value);
  };

  const [addRoleModal , setAddRoleModal] = useState(false)
  const toggleAddRoleModal = () => {
    setAddRoleModal(!addRoleModal);
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex flex-col w-full">
          <div className="flex w-full bg-[#F0304A] text-white p-2">ผู้ใช้งาน</div>
          <div className="flex flex-row w-full justify-between items-center my-2 md:my-4">
              <input
                type="text"
                className="font-[kanit] text-base border-2 rounded w-10/12 h-fit mx-2 px-2 md:w-9/12"
                placeholder="&#xF002; Search Here"
                style={{ fontFamily: "Arial, FontAwesome" }}
                value={globalFilterValue}
                onChange={onFilterChange}
              />
              <button onClick={toggleAddRoleModal} className="w-2/12 py-1 rounded bg-[#F0304A] text-white text-xs md:text-base xl:text-lg">เพิ่ม</button>
          </div>
        </div>
      </>
    );
  };

  const searchHeader = renderHeader();

  const nameUser = (rowData: any) => {
    return <span>{rowData.firstName + " " + rowData.lastName}</span>;
  };

  const deleteDialog = (deleteId:number) =>{
    confirmDialog({
      message: 'คุณต้องการลบผู้ใช้งานหรือไม่ ?',
      header: 'ลบผู้ใช้งาน',
      accept: () => deleteUser(deleteId),
    })
  }

  const deleteUser = async (deleteId:number) => {
    try{
      let res = await axiosApiInstance.delete(`/api/user/officer/${deleteId}`);
      if(res.status === 200){
          console.log('send',res)
      }
    }
    catch(err){
      console.log(err);
    }
  };
  const deleteButton = (rowData: any) => {
    return (
      <button onClick={() => deleteDialog(rowData.id)}>
        <IoTrashBin />
      </button>
    );
  };

  const { members } = useMembers()
  const { officers } = useOfficers()

  return (
    <>
    <div className="flex flex-col justify-center w-full">
      <DataTable
        value={role == "members" ? members : officers}
        scrollable
        scrollHeight="flex"
        responsiveLayout="stack"
        className="font-[kanit]"
        header={searchHeader}
        filters={filterValue}
        emptyMessage="No items found."
      >
        <Column
          field="id"
          header="รหัสผู้ใช้งาน"
          headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
        />
        <Column
          field="firstName + lastName"
          header="ชื่อ"
          body={nameUser}
          headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
        />
        <Column
          field="email"
          header="Email"
          headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
        />
        {role == "officers" && (
          <Column
          body={deleteButton}
          headerStyle={{ backgroundColor: "#F0304A", color: "white" }}
        />)}
      </DataTable>
    </div>

    <ModalAddRole addRoleVisible={addRoleModal} addRoleOnClose={toggleAddRoleModal} />

    </>
  );
};

export default DashboardControlUser;
