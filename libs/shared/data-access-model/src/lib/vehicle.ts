// export class Vehicle {
//   public id: string;
//   public name: string;
//   public pz: string;
//   public nbpz: string;
//   public type: string;
//   public zt: string;
//
//   constructor(vehicle: any = null) {
//     this.id = vehicle ? vehicle.Id : null;
//     this.name = vehicle ? vehicle.Name : '';
//     this.pz = vehicle ? vehicle.Pz : '';
//     this.nbpz = vehicle ? vehicle.Nbpz : '';
//     this.type = vehicle ? vehicle.Type : '';
//     this.zt = vehicle ? vehicle.Zt : '';
//
//   }
// }
export interface Vehicle {
  id: string;
  name: string;
  pz: string;
  nbpz: string;
  type: string;
  zt: string;

}

export function generateMockVehicle(): Vehicle {
  return {
    id: '1',
    name: "string",
  pz: "string",
  nbpz: "string",
  type: "string",
  zt: "string"

}
}

