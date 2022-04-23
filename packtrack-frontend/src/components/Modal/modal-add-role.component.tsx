import React , {useState} from 'react'
import { Dialog } from "primereact/dialog";

import { OfficerType } from '../../types/officer.type';
import axiosApiInstance from "../../utils/axios";
import useOfficers from "../../hooks/useOfficers"

interface AddRole {
  addRoleVisible: boolean;
  addRoleOnClose: () => void;
}

const ModalAddRole: React.FC<AddRole> = ({addRoleVisible,addRoleOnClose}) => {

  const headerText = (
    <span className="flex justify-center font-[kanit] text-lg md:text-xl">
      เพิ่มบัญชีเจ้าหน้าที่
    </span>
  );


  const [officerProps,setOfficerProps] = useState<OfficerType>({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setOfficerProps((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      let res = await axiosApiInstance.post("/api/user/officer", officerProps );
      if(res.status === 201){
        
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <Dialog
    header={headerText}
    visible={addRoleVisible}
    draggable={false}
    className="w-2/3 md:w-1/2 xl:w-1/3"
    onHide={addRoleOnClose}
    >
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='flex flex-col w-full'>
            <label className='font-[kanit] text-lg'>อีเมล</label>
            <input name='email' value={officerProps.email} onChange={handleChange} type="email" className='rounded  border border-main text-sm p-2 w-full' />
          </div>
          <div className='flex flex-col w-full'>
            <label className='font-[kanit] text-lg'>รหัสผ่าน</label>
            <input name='password' value={officerProps.password} onChange={handleChange} type="password" className='rounded border border-main text-sm p-2 w-full'  />
          </div>
          <div className='flex flex-row w-full justify-between'>
          <div className='w-[48%]'>
            <label className='font-[kanit] text-lg'>ชื่อ</label>
            <input name='firstName' value={officerProps.firstName} onChange={handleChange} type="text" className='rounded border border-main text-sm p-2 w-full'  />
          </div>
          <div className='w-[48%]'>
            <label className='font-[kanit] text-lg'>นามสกุล</label>
            <input name='lastName' value={officerProps.lastName} onChange={handleChange} type="text" className='rounded border border-main text-sm p-2 w-full' />
          </div>
          </div>
          <input type="submit" className='w-2/3 text-center bg-main rounded text-white px-4 py-1 my-2 md:w-1/3' />
        </div>
      </form>
    </Dialog>
  )
}

export default ModalAddRole