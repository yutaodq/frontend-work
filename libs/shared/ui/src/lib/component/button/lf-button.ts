import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  Provider,
  ViewChild,
  AfterViewInit, OnDestroy
} from '@angular/core';

// import { ConvertUtil } from 'life-core/util/lang/convert.util';

import { ISecureComponent, SecureComponent, AuthorizationUtil, AuthorizationLevel } from '../authorization';
import { DomHandler } from 'primeng/dom';
import { ButtonActionType } from '../shared/button';
import { ConvertUtil } from '@zy/shared/util';

export const BUTTON_PROVIDERS: Array<Provider> = [DomHandler];

@Component({
    selector: 'zy-ui-lf-button',
    templateUrl: './lf-button.html',
    providers: [...BUTTON_PROVIDERS, { provide: SecureComponent, useExisting: forwardRef(() => LfButton) }]
})

/**
 * LfButton component. Code copied from PrimeNG button, with the modification that this.el.nativeElement
 * is replaced by this.el.nativeElement.children[0] because in our case button is a child element under lf-button.
 */
export class LfButton implements ISecureComponent, AfterViewInit, OnDestroy {
    @Input()
    public type: string;

    @Input()
    public iconPos = 'left';

    @Input()
    public cornerStyleClass = 'ui-corner-all';

    public _label: string;

    public _icon: string;

    public initialized: boolean;

    @Input()
    public id: string;

    @Input()
    public name: string;

    @Input()
    public style: any;

    @Input()
    public styleClass: string;

    @Input()
    public title = '';

    @Input()
    public actionType: ButtonActionType = ButtonActionType.Presentation;

    @Output()
    public onClick: EventEmitter<any> = new EventEmitter();

    @ViewChild('buttonElement')
    protected buttonElement: ElementRef<HTMLButtonElement>;

    private _authorizationLevel: AuthorizationLevel;

    private _disabled: boolean | string;

    private _hidden: boolean | string;

    constructor(public el: ElementRef<HTMLElement>, public domHandler: DomHandler) {}

    public ngAfterViewInit(): void {
        // this.domHandler.addMultipleClasses(this.el.nativeElement.children[0], this.getStyleClass());
      DomHandler.addMultipleClasses(this.el.nativeElement.children[0], this.getStyleClass());
        this.initialized = true;
    }

    public getStyleClass(): string {
        let styleClass = `ui-button ui-widget ui-state-default ${this.cornerStyleClass}`;
        if (this.icon) {
            if (this.label !== null && this.label !== undefined) {
                styleClass =
                    this.iconPos === 'left'
                        ? `${styleClass} ui-button-text-icon-left`
                        : `${styleClass} ui-button-text-icon-right`;
            } else {
                styleClass = `${styleClass} ui-button-icon-only`;
            }
        } else {
            styleClass = `${styleClass} ui-button-text-only`;
        }
        return styleClass;
    }

    @Input()
    public get label(): string {
        return this._label;
    }

    public set label(val: string) {
        this._label = val;

        if (this.initialized) {
          DomHandler.findSingle(this.el.nativeElement.children[0], '.ui-button-text').textContent = this._label;
        }
    }

    @Input()
    public get icon(): string {
        return this._icon;
    }

    public set icon(val: string) {
        this._icon = val;
        if (this.initialized) {
            // Custom change start
            // changed class '.ui-clickable .fa fa-fw' to just '.ui-clickable'
            const iconPosClass = this.iconPos === 'right' ? 'ui-button-icon-right' : 'ui-button-icon-left';
          DomHandler.findSingle(
                this.el.nativeElement.children[0],
                '.ui-clickable'
            ).className = `${iconPosClass} ui-clickable ${this.icon}`;
            // Custom change end
        }
    }

    public ngOnDestroy(): void {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }

        this.initialized = false;
    }

    // ------------------------------

    public onButtonClick(event: Event): void {
        // event.stopPropagation();
        this.onClick.emit(event);
    }

    public focus(): void {
        this.buttonElement.nativeElement.focus();
    }

    public get disabled(): boolean | string {
        return this._disabled;
    }

    @Input()
    public set disabled(value: boolean | string) {
        this.updateDisabled(value);
    }

    public get hidden(): boolean | string {
        return this._hidden;
    }

    @Input()
    public set hidden(value: boolean | string) {
        this.updateHidden(value);
    }

    // Component Authorization
    public get authorizationLevel(): AuthorizationLevel {
        return this._authorizationLevel;
    }

    @Input()
    public set authorizationLevel(value: AuthorizationLevel) {
        this._authorizationLevel = value;
        this.updateDisabled(this._disabled);
        this.updateHidden(this._hidden);
    }

    protected updateDisabled(value: boolean | string): void {
        this._disabled = !AuthorizationUtil.isActionComponentEnabled(this._authorizationLevel, this.actionType)
            ? true
            : this.getBooleanAttrValue(value);
        this.buttonElement.nativeElement.disabled = this._disabled;
    }

    protected updateHidden(value: boolean | string): void {
        this._hidden = !AuthorizationUtil.isActionComponentVisible(this._authorizationLevel)
            ? true
            : this.getBooleanAttrValue(value);
        this.buttonElement.nativeElement.hidden = this._hidden;
    }

    private getBooleanAttrValue(value: boolean | string): boolean {
        return ConvertUtil.toBoolean(value);
    }
}
