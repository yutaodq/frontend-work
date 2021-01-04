import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';

import { BlockUI as PrimeNgBlockUI } from 'primeng/blockui';
import { DomHandler } from 'primeng/dom';

@Component({
    selector: 'zy-ui-block-ui',
    templateUrl: './blockui.html',
    providers: [DomHandler]
})
export class BlockUI extends PrimeNgBlockUI {
    constructor(el: ElementRef, domHandler: ChangeDetectorRef) {
        super(el, domHandler);
    }
}
