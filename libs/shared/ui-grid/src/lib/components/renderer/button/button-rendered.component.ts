/*
https://github.com/mananppandya7/EmployeeManagementSystem
 */
import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'zy-ui-grid-button-rendered',
  templateUrl: './button-rendered.component.html',
  styleUrls: ['./button-rendered.component.scss']
})
export class ButtonRenderedComponent implements ICellRendererAngularComp {

  //#region VARIABLES
  params;
  fa: string;
  iconClass: string;
  //#endregion

  //#region EVENTS & METHODS
  agInit(params): void {
    this.params = params;
    this.fa = this.params.fa || null;
    this.iconClass = this.params.iconClass || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      console.log(`在控制台打印:onClick($event)`);
      // Put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        id:  this.params.node.data.id
      };
      this.params.onClick(params);
    }
  }
  //#endregion
}
