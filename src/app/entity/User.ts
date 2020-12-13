export class User{
  Id: string;
  Name: string;
  Surname: string;
  Phone: string;
  Password: string;

  constructor(Id: string, Name: string, Surname: string, Phone: string, Password: string) {
    this.Id = Id;
    this.Name = Name;
    this.Surname = Surname;
    this.Phone = Phone;
    this.Password = Password;
  }
}
