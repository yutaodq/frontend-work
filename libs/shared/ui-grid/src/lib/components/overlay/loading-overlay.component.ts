import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'zy-ui-grid-loading-overlay',
    template:
        `<div style="text-align: center">
    <div class="ag-overlay-loading-center" style=" margin-left: 25%; width: 50%; border-radius: 0; background-color: #1a9ad0; height: 9%">
    <small style="color: white">加载过程中...</small>
    </div>
    </div>`,
    // template: '<mat-spinner [diameter]="32" [strokeWidth]="1"></mat-spinner>',
    styles: [`
    :host {
        display: grid;
        place-item: center;
        height: 100%;
    }
    `]
})
export class LoadingOverlayComponent implements ILoadingOverlayAngularComp {
    private params: any;

    agInit(params): void {
        this.params = params;
    }
}
