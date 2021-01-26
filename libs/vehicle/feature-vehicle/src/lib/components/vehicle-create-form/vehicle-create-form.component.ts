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

export class VehicleCreateFormComponent   implements OnInit {
  @Output() addEvent: EventEmitter<string> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();
  constructor( private _formPresenter: VehicleCreateFormPresenter) {
  }

  ngOnInit(): void {
    this._formPresenter.add$.subscribe(name => this.addEvent.emit(name));
    this._formPresenter.cancel$.subscribe(name => this.cancelEvent.emit(name));

  }

  onSubmit(model: any) {
    console.log('保存记录' + this.model);
    // this._formPresenter.();
  }

  public onSave(): void{

  }
  public cancelCreate(): void{
    this._formPresenter.cancel();
  }

  get form(): FormGroup {
    return this._formPresenter.form;
  }
  get model() {
    return this._formPresenter.model;
  }
  get fields(): FormlyFieldConfig[] {
    return this._formPresenter.fields;
  }

}

