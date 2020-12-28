import {Component, ElementRef, OnDestroy} from "@angular/core";
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

interface MyParams extends IHeaderParams {
    menuIcon: string;
}

@Component({
    templateUrl: 'sortable-header.component.html',
    styleUrls: ['sortable-header.component.scss']
})
export class SortableHeaderComponent implements OnDestroy, IHeaderAngularComp {
    public params: MyParams;
    public sorted: string;
    private elementRef: ElementRef;

    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    agInit(params: MyParams): void {
        this.params = params;
        this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
        this.onSortChanged();
    }

    ngOnDestroy() {
        console.log(`Destroying HeaderComponent`);
    }

    onMenuClick() {
        this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
    }

    onSortRequested(order, event) {
        this.params.setSort(order, event.shiftKey);
    }
    // 要知道列的排序状态何时发生变化(例如何时更新图标)，您应该侦听列上的sortChanged事件。
    onSortChanged() {
        if (this.params.column.isSortAscending()) {
            this.sorted = 'asc';
        } else if (this.params.column.isSortDescending()) {
            this.sorted = 'desc';
        } else {
            this.sorted = '';
        }
    }

    private querySelector(selector: string) {
        return <HTMLElement>this.elementRef.nativeElement.querySelector(
            '.customHeaderMenuButton', selector);
    }
}
