import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class VehicleCreateFormPresenter {
  form = new FormGroup({});
  model = { name: '', pz: 'sdf', nbpz: '', type: '', zt: '', bz: '' };

  // const VehicleGridFields = {
  //   id: 'id',
  //   name: 'name',
  //   pz: 'pz',
  //   nbpz: 'nbpz',
  //   type: 'type',
  //   zt: 'zt',
  //   bz: 'bz'
  // };

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    },
    {
      key: 'pz',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    },
    {
      key: 'nbpz',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    },
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
}
