export interface IVehicle {
  id?: number;
  name: string;
}

export interface IKufangEntity {
  id?: number;
  identifier?: string;
  name?: string;
  bz?: string;
}

export class KufangEntity implements IKufangEntity {
  constructor(
    public id?: number,
    public identifier?: string,
    public name?: string,
    public bz?: string
  ) {
  }
}

export class Vehicle implements IVehicle {

  constructor(
    public id?: number,
    public name?: string
  ) {
  }
}
