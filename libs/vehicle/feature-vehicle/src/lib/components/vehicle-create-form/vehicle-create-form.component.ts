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
import {VehicleCreateFormPresenter} from './vehicle-create-form.presenter';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'zy-vehicle-create-form',
  templateUrl: './vehicle-create-form.component.html',
  styleUrls: ['./vehicle-create-form.component.scss'],
  providers: [VehicleCreateFormPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleCreateFormComponent  {

  // form = new FormGroup({});
  // model = { email: 'email@gmail.com' };
  //
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'email',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   }
  // ];
  form: FormGroup;
  model: { };

  fields: FormlyFieldConfig[] ;

  constructor( private formPresenter: VehicleCreateFormPresenter) {
    this.form = this.formPresenter.form;
    this.model= this.formPresenter.model;
    this.fields = this.formPresenter.fields;
  }

  onSubmit(model: any) {
    console.log(this.model);
  }
  public delete(): void{

  }
  public cancel(): void{

  }

}

