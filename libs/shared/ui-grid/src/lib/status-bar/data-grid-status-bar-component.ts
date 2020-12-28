import { Component, Input, Injectable } from '@angular/core';

@Component({
    selector: 'ui-data-grid-status-bar',
    templateUrl: './data-grid-status-bar-component.html'
})
@Injectable()
export class DataGridStatusBarComponent {
    @Input() public rowCount: number;
}
