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
  // @Input()   public vehicle:        Vehicle;
  // ref: DynamicDialogRef;

  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter();
  // @Output()
  // public onCancelClick: EventEmitter<any> = new EventEmitter();

  @Output()
  public onList: EventEmitter<any> = new EventEmitter();

  constructor(
  ) {
  }

  // public cancel(event: Event): void {
  //   console.log('Awesomeness Ensures!!!');
  //   // event.stopPropagation();
  //   this.onCancelClick.emit(event);
  // }

  public delete(event: Event): void {
    // console.log('Awesomeness Ensures!!!');
    //   // event.stopPropagation();
      this.onDelete.emit();
  }
  //   this.ref = this.dialogService.open(VehicleDeleteDialogComponent, {
  //     header: 'Choose a Product',
  //     width: '70%',
  //     contentStyle: {"max-height": "500px", "overflow": "auto"},
  //     baseZIndex: 10000
  //   });
  //
  //   this.ref.onClose.subscribe((product: string) =>{
  //     if (product) {
  //       // this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
  //     }
  //   });
  // }
  toList(event: Event): void {
    this.onList.emit();
  }
}

