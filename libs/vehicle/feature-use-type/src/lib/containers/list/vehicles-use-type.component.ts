import { Component, OnInit } from '@angular/core';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Vehicle } from '@zy/model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicles-use-type.component.html',
  styleUrls: ['./vehicles-use-type.component.scss'],
  providers: []
})

export class VehiclesUseTypeComponent implements OnInit {


  constructor(
  ) {

  }

  ngOnInit(): void {
  }


}
