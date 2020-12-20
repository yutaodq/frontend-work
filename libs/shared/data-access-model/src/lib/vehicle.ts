export class Vehicle {
  public id:                  number;
  public name:                string;

  constructor(vehicle: any = null) {
    this.id                 = vehicle ? vehicle.Id : null;
    this.name               = vehicle ? vehicle.Name : '';
  }
}
