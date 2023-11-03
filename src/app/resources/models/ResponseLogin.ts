export class ResponseLogin {
  public body: {
    user: string;
  };

  constructor() {
    this.body = {
      user: '',
    };
  }
}
