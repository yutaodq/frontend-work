import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Vehicle } from '@zy/model';
import { VehicleFacade } from '@zy/shared/vehicle/data-acces-facade';

@Component({
  selector: 'zy-vehicle-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleDetailsComponent implements OnInit, OnDestroy {

  public vehicle:        Vehicle;
  private subscriptions: Array<Subscription> = [];

  constructor(
    public vehiclesSandbox: VehicleFacade,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.registerEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(this.vehiclesSandbox.vehicleDetails$.subscribe((vehicle: any) => {
      if (vehicle) {
        this.changeDetector.markForCheck();
        this.vehicle = vehicle;
      }
    }));
  }
}
