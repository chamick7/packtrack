export interface QueryPackage {
  trackingNumber?: string;
  transporterDigit: string;
  status?: string;
}

export interface UpdatePackage {
  id: number;
}

export interface MailingPackage {
  trackingNumber?: string;
  transporterDigit: string;
  receiverId: number;
}

export interface SplitPackage {
  receiverId: number;
}

export interface GroupPackage {
  receiverId: number;
  packages: QueryPackage[];
}
