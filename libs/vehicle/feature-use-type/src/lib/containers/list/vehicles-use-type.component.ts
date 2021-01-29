import { Component, OnInit } from '@angular/core';
import { VehicleUseTypesFacade } from '@zy/shared/vehicles/data-acces/facade/use-type';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles-use-type.component.html',
  styleUrls: ['./vehicles-use-type.component.scss'],
  providers: [VehicleUseTypesFacade]
})

export class VehiclesUseTypeComponent implements OnInit {


  constructor(vehicleUseTypesFacade: VehicleUseTypesFacade
  ) {

  }

  ngOnInit(): void {
  }


}
