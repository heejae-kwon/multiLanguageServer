
export default class User {
  public email: string;
  public password: string;
  public name : string
  constructor(name:string = '', email:string = '', password:string = ''){
    this.email = name
    this.password = password
    this.name = name
  }
}