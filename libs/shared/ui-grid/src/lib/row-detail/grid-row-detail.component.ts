import { Component } from '@angular/core';

import { ICompose } from 'zyapp/html-ui/compose';
import { GridRowDetailModel } from 'zyapp/grid/row-detail/grid-row-detail.model';
import {
    IDialogViewModel,
    DialogViewModelResult,
    DialogData
} from "zyapp/html-ui/dialog/shared/dialog.interface";
import { DialogButtonType} from "zyapp/html-ui/dialog/shared/dialog-button";

@Component({
    selector: 'ui-grid-row-detail',
    templateUrl: 'grid-row-detail.component.html'
})
export class GridRowDetailComponent implements ICompose, IDialogViewModel {
    public rowDetail: GridRowDetailModel;

    constructor() {}

    public setModel(model: DialogData): void {
        this.rowDetail = model.parameterData;
    }

    public onDialogButtonClick(buttonId: string): Promise<DialogViewModelResult> {
        if (buttonId === DialogButtonType.OK) {
            return Promise.resolve(new DialogViewModelResult(true, true, false));
        }
    }
}
