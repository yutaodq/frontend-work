import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';

import { Vehicle } from '@zy/model';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VehicleDeleteDialogComponent } from '../../components/vehicle-delete-dialog/vehicle-delete-dialog.component';

@Component({
  selector: 'zy-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDetailsComponent implements OnInit, OnDestroy {

  public vehicle$: Observable<Vehicle>;
  public vehicle: Vehicle;
  private subscriptions: Array<Subscription> = [];
  private ref: DynamicDialogRef;

  constructor(
    public vehiclesFacade: VehiclesFacade,
    private _router: Router,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _messageService: MessageService
  ) {
  }

  public returnList(): void {
    this.vehiclesFacade.returnToList();
    console.log('Awesomeness Ensures!!!cancelDelete');
    this._router.navigate(['vehicles', 'list']);

  }

  public delete(): void {
    this.ref = this._dialogService.open(VehicleDeleteDialogComponent, {
      header: '删除车辆信息档案',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((isDelete) => {
      if (isDelete) {
        this.vehiclesFacade.removeVehicle(this.vehicle);
      }
    });

  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(this.vehiclesFacade.vehicleDetails$.subscribe((vehicle: any) => {
        if (vehicle) {
          this.changeDetector.markForCheck();
          this.vehicle = vehicle;
          this.vehicle$ = of(vehicle);
        }
      })
    );
  }

  /*
   * angular 方法
   */
  ngOnInit() {
    this.registerEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
