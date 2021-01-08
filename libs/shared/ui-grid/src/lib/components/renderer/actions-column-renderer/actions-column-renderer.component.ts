import { Component, AfterViewChecked } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DashboardService } from '../../../../../shared/services/dashboard.service';

@Component({
    selector: 'zy-ui-grid-actions-column-renderer',
    templateUrl: './actions-column-renderer.component.html',
    styleUrls: ['./actions-column-renderer.component.css']
})
export class ActionsColumnRendererComponent implements AfterViewChecked, ICellRendererAngularComp {
    public params: any;

    constructor(
        public smartModalService: NgxSmartModalService,
        private dashboardService: DashboardService
      ) { }

    agInit(params: any): void {
        this.params = params;
    }

    ngAfterViewChecked() {
        const confirmViewEditObj: Object = {
          obj: this.params.data
        };
        this.smartModalService.setModalData(confirmViewEditObj, 'confirmViewEdit');
        const confirmViewSplitObj: Object = {
            obj: this.params.data
          };
        this.smartModalService.setModalData(confirmViewSplitObj, 'confirmViewSplit');
        const confirmViewRejectObj: Object = {
          text: 'Do you want to Reject the record?'
        };
        this.smartModalService.setModalData(confirmViewRejectObj, 'confirmViewReject');
        const confirmViewPostObj: Object = {
            text: 'Do you want to Post the record?'
        };
        this.smartModalService.setModalData(confirmViewPostObj, 'confirmViewPost');
      }

    public setRowData() {
        this.params.context.componentParent.setRowData(this.params);
    }

    public deleteSplit() {
        this.params.context.componentParent.deleteSplit(this.params);
    }

    refresh(): boolean {
        return false;
    }
}
