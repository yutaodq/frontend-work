import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

// @Component({
//     selector: 'cms-no-rows-overlay',
//     template: `<div class="ag-overlay-loading-center" style="background-color: lightcoral;">` +
//         `   <i class="far fa-frown"> {{this.params.noRowsMessageFunc()}} </i>` +
//         `</div>`
// })
@Component({
    selector: 'zy-ui-grid-rows-overlay',
    template: `<div class="ag-overlay-loading-center" style="background-color: lightcoral;">` +
        `   <i class="far fa-frown"> dddddddddddddd </i>` +
        `</div>`
})

export class NoRowsOverlayComponent implements INoRowsOverlayAngularComp {
    private params: any;

    agInit(params): void {
        this.params = params;
    }
}
