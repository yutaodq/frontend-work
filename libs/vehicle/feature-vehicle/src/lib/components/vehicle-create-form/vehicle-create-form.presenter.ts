import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class VehicleCreateFormPresenter {
  private _add: Subject<string> = new Subject();
  add$: Observable<string> = this._add.asObservable();
  private _cancel: Subject<string> = new Subject();
  cancel$: Observable<string> = this._cancel.asObservable();

  form = new FormGroup({});
  model = { name: '', pz: 'sdf', nbpz: '', type: '', zt: '', bz: '' };

  fields: FormlyFieldConfig[] = FIELDS;

  public cancel(): void {
    this._cancel.next('cancelCreate');
  }

  public save(): void {
    this._add.next('cancelCreate');
  }

}

const FIELDS =  [
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-md-6',
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
      },
      {
        className: 'col-md-3',
        key: 'pz',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
      },
      {
        className: 'col-md-3',
        key: 'nbpz',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true
        }
      }
    ]
  },
  { template: '<hr />' },
  {
    key: 'type',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true
    }
  },
  {
    key: 'zt',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true
    }
  },
  {
    key: 'bz',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true
    }
  }
];
