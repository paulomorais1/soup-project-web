export class ResponseLogin {
  public body: {
    user: string;
    beneficiary:string;
  };

  constructor() {
    this.body = {
      user: '',
      beneficiary:''
    };
  }
}
