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
import { VehicleDeleteDialogComponent } from '../vehicle-delete-dialog/vehicle-delete-dialog.component';

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
    this.ref = this.dialogService.open(VehicleDeleteDialogComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: string) =>{
      if (product) {
        // this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
      }
    });
  }
  returnToList() {
    this._router.navigate(['vehicles', 'list']);
  }
}

