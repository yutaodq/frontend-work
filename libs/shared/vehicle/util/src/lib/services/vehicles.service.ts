// import {
//   Injectable,
//   Inject,
//   forwardRef
// }                           from '@angular/core';
// import { Vehicle } from '@zy/model';
//
// @Injectable()
// export class VehiclesService {
//
//   private vehiclesSubscription;
//
//   /**
//    * Transforms grid data products recieved from the API into array of 'Product' instances
//    *
//    * @param products
//    */
//   static gridAdapter(vehicles: any): Array<Vehicle> {
//     return vehicles.map(vehicle => new Vehicle(vehicle));
//   }
//
//   /**
//    * Transforms product details recieved from the API into instance of 'Product'
//    *
//    * @param product
//    */
//   static vehicleDetailsAdapter(vehicles: any): Vehicle {
//     return new Vehicle(vehicles);
//   }
// }
