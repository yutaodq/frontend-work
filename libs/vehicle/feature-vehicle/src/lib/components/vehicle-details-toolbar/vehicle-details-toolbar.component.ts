import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Vehicle } from '@zy/model';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'zy-vehicle-details-toolbar',
  templateUrl: './vehicle-details-toolbar.component.html',
  styleUrls: ['./vehicle-details-toolbar.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDetailsToolbarComponent  {
  @Input()   public vehicle:        Vehicle;
  ref: DynamicDialogRef;

  constructor(
    private _vehiclesFacade: VehiclesFacade,
    private _router: Router,
    public dialogService: DialogService,
    public messageService: MessageService,
  private confirmationService: ConfirmationService,

  ) {
  }

  delete() {
    console.log('Awesomeness Ensures!!!');
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Confirmation',
      accept: () => {
        console.log('Awesomeness Ensures!!!');
      },
      reject: () => {
        console.log('Nope!!!');
      },
    });
  }
  returnToList() {
    this._router.navigate(['vehicles', 'list']);
  }
}

