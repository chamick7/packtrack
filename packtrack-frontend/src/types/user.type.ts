export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  profile: {
    photo: number;
    mobile: string;
  };
  notification: {
    email: boolean;
    sms: boolean;
    line: boolean;
  };
}
