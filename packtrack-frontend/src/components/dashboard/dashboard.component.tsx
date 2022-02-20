import React, { useEffect, useState } from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import SquareButton from "../button/square-button.component";
import Search from "../search/search.component";


const Packages = [
	{ id:0 , order: 1, packagenumber: "ES124574824TH", service: 'kerry', customer: 'miw', contact: 'e-mail', status: 'arrived' },
	{ id:1 , order: 2, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:2 , order: 3, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:3 , order: 4, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:4 , order: 5, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:5 , order: 6, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:6 , order: 7, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:7 , order: 8, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:8 , order: 9, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:9 , order: 10, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:10 , order: 11, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
	{ id:11 , order: 12, packagenumber: "ES124574824TH", service: 'flash', customer: 'nattawat', contact: 'e-mail', status: 'arrived' },
];



const DashboardOfficer = () => {
  const [selectedPackage , setSelectedPackage] = useState(null)

  // interface Package{
  //   id:number;
  //   order:number;
  //   packagenumber:string;
  //   service:string;
  //   customer:string;
  //   contact:string;
  //   status:string;
  // }

  // const [Package , setPackage] = useState<Package | null>(null)

  // useEffect(() => {
  //   setPackage(Packages)
  // });

  // const statusBadge = (Package:object) => {
  //   return <span className={`package-badge status-${Package.status}`}>{Package.status}</span>;
  // }

  return (
    <div className="container-fluid d-flex row p-0 justify-content-center">
      <div className="row d-flex justify-content-between p-0 h-auto">
        <div className="card col-7 d-flex flex-row align-items-center justify-content-center" style={{height:"4vw"}}>
          <div className="col">
            <SquareButton
              style={{
                fontSize: "0.8vw",
                width: "6vw",
                height: "2vw",
                borderRadius: "5px",
                backgroundColor: "#D81A0C",
                justifyContent: "center",
                // marginRight: "0.4vw",
              }}
            >
              + ผู้ใช้งานใหม่
            </SquareButton>
          </div>
          <div className="col">
            <SquareButton
              style={{
                fontSize: "0.8vw",
                width: "8vw",
                height: "2vw",
                border: "2px solid #D81A0C",
                borderRadius: "5px",
                color: "#D81A0C",
                backgroundColor: "white",
                justifyContent: "center",
                // marginRight: "0.4vw",
              }}
            >
              + พัสดุไม่ลงทะเบียน
            </SquareButton>
          </div>
          <div className="col"><Search /></div>
          <div></div>
        </div>
        <div className="card col-4">Test2</div>
      </div>
      <div className="card row d-flex">
      <DataTable value={Packages} selectionMode="checkbox" selection={selectedPackage} onSelectionChange={e => setSelectedPackage(e.value)} dataKey="id" responsiveLayout="scroll" selectionPageOnly paginator rows={10}>
      <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
			<Column field='order' header='ลำดับ' />
			<Column field='packagenumber' header='เลขพัสดุ' />
			<Column field='service' header='ผู้ให้บริการ' />
			<Column field='customer' header='ชื่อผู้รับ' />
			<Column field='contact' header='ช่องทางการติดต่อ' />
			<Column field='status' header='สถานะ' /> 
		</DataTable>
      </div>
    </div>
  );
};

//body={statusBadge} 

export default DashboardOfficer;
