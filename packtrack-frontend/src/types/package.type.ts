export interface PackageType {
    id:number;
    trackingNumber:string;
    status:string;
    notification:string;
    importedAt:string;
    exportedAt:string;
    receivedAt:string;
    createdAt:string;
    updatedAt:string;
    transporter: {
        id:number;
        digit:string;
        name:string;
    };
    receiver: {
        id:number;
        email:string;
        firstName:string;
        lastName:string;
    };
    importer:{
        firstName:string;
        lastName:string;
    }
    exporter:{
        firstName:string;
        lastName:string;
    }
}