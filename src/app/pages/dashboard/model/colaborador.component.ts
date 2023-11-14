export interface IAddress {
    street: string;
    city: string;
    zipCode: string;
  }
  
  export type TRole = 'Admin' | 'User'; 
  
  export interface IUser {
    id: string;
    name: string;
    surname: string;
    sector: string;
    role: TRole;
    address: IAddress;
    phone: string;
    email?: string;
    password: string;
    isInterviewer: string;
  }
  