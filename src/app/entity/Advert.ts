export class Advert{
  Id: number;
  District: string;
  Street: string;
  HouseNumber: number;
  Area: number;
  Floor: number;
  Rooms: number;
  Description: string;
  Price: number;
  OwnerName: string;
  OwnerPhone: number;
  // tslint:disable-next-line:max-line-length
  constructor(Id: number, District: string, Street: string, HouseNumber: number, Area: number, Floor: number, Rooms: number, Description: string, Price: number, OwnerName: string, OwnerPhone: number) {
    this.Id = Id;
    this.District = District;
    this.Street = Street;
    this.HouseNumber = HouseNumber;
    this.Area = Area;
    this.Floor = Floor;
    this.Rooms = Rooms;
    this.Description = Description;
    this.Price = Price;
    this.OwnerName = OwnerName;
    this.OwnerPhone = OwnerPhone;
  }
}
