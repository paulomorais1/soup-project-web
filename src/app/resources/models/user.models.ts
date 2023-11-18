export class IAddress {
  public street: string | undefined;
  public district: string | undefined;
  public city: string | undefined;
  public  zipCode: string | undefined;
  }
  
  export type TRole = 'Admin' | 'User' ; 
  
  export class IUser {
    public  id: string | undefined;
    public   name: string | undefined;
    public  surname: string | undefined; 
    public  sector: string | undefined;
    public role: TRole | undefined;
    public  address: IAddress | undefined;
    public  phone: string | undefined;
    public  email?: string | undefined;
    public password: string | undefined;
    public isInterviewer: string | undefined;
  }
  