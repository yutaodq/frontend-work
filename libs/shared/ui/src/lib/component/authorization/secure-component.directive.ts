import { Directive, ElementRef, OnInit } from '@angular/core';

import { SecureComponent } from './secure-component';
import { AuthorizationProvider } from './authorization.provider';
import { AuthorizationData } from './authorization-data';
import { AuthorizationLevel } from './authorization-level';

@Directive({
    selector: '[zyUiSecureComponent]'
})
export class SecureComponentDirective implements OnInit {
    protected authorizationProvider: AuthorizationProvider;
    protected secureComponent: SecureComponent;
    protected elementRef: ElementRef<HTMLElement>;

    constructor(
        secureComponent: SecureComponent,
        authorizationProvider: AuthorizationProvider,
        elementRef: ElementRef<HTMLElement>
    ) {
        this.secureComponent = secureComponent;
        this.authorizationProvider = authorizationProvider;
        this.elementRef = elementRef;
    }

    public ngOnInit(): void {
        this.setupSecureComponent();
    }

    protected setupSecureComponent(): void {
        const componentName = this.getComponentName();
        const authorizationData = this.authorizationProvider.getAuthorizationData();
        this.secureComponent.authorizationLevel = this.getAuthorizationLevel(componentName, authorizationData);
    }

    private getComponentName(): string {
        return this.secureComponent.name || this.elementRef.nativeElement.getAttribute('name');
    }

    private getAuthorizationLevel(componentName: string, authorizationData: AuthorizationData): AuthorizationLevel {
        return authorizationData.getLevel(componentName);
    }
}
