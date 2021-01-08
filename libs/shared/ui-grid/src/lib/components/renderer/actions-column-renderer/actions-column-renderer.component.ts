import { Component, AfterViewChecked } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'zy-ui-grid-actions-column-renderer',
  templateUrl: './actions-column-renderer.component.html',
  styleUrls: ['./actions-column-renderer.component.css']
})
export class ActionsColumnRendererComponent implements ICellRendererAngularComp {
  public params: ICellRendererParams;

  constructor() {
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }


  public onSelectData() {
    this.params.context.componentParent.selectData(this.getDataId());
  }

  private getDataId(): string {
    return this.params.node.data.id;

  }

  refresh(): boolean {
    return false;
  }
}
