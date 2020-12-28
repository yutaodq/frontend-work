import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'zy-ui-grid-renderer-component',
    template: `
        <span>{{value}}</span>
    `
})
export class RendererComponent implements OnInit {
    value: any;

    // a simple renderer just to illustrate that normal Angular DI will work in grid cms-components
    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    agInit(params: any) {
        this.value = params.value;
    }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
    }
}
