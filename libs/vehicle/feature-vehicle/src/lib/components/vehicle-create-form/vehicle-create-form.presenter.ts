import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Vehicle } from '@zy/model';

const FIELDS  = require('./vehicle-create-form.json');

export class VehicleCreateFormPresenter {
  private _add: Subject<Vehicle> = new Subject();
  add$: Observable<Vehicle> = this._add.asObservable();

  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  form = new FormGroup({});
  model = { };

  fields: FormlyFieldConfig[] = FIELDS;
  options: FormlyFormOptions = {};
  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public save(): void {
    if (!this.form.valid) {
      console.log('public save(): void保存记录错误' + this.model);
return;
    }
    // const vehicle: Vehicle = {id: 'ddsdsdsds',
    // name: this.model.valueOf}
    // // this.model as Vehicle;
    const vehicle: Vehicle = this.model as Vehicle;
    Object.keys(vehicle).forEach((key) => (vehicle[key] === null || vehicle[key] === '') && delete vehicle[key]);

    // const data = { ...this.model };
    this._add.next(vehicle);

  }
}

  // const  FIELDS = [
  //   {
  //     fieldGroupClassName: 'row',
  //     fieldGroup: [
  //       {
  //         className: 'col-md-6',
  //         key: 'name',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Email address',
  //           placeholder: 'Enter email',
  //           required: true
  //         }
  //       },
  //       {
  //         className: 'col-md-3',
  //         key: 'pz',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Email address',
  //           placeholder: 'Enter email',
  //           required: true
  //         }
  //       },
  //       {
  //         className: 'col-md-3',
  //         key: 'nbpz',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Email address',
  //           placeholder: 'Enter email',
  //           required: true
  //         }
  //       }
  //     ]
  //   },
  //   { template: '<hr />' },
  //   {
  //     key: 'type',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true
  //     }
  //   },
  //   {
  //     key: 'zt',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true
  //     }
  //   },
  //   {
  //     key: 'bz',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true
  //     }
  //   }
  // ];
