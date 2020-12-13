import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zy-ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('overlayMenuAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0.8)' }),
        animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' }))
      ]),
      transition(':leave', [
        animate('.1s linear', style({ opacity: 0 }))
      ])
    ])
  ]

})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() logo;
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('topbarMenu') topbarMenu: ElementRef;

  activeMenuIndex: number;
  outsideClickListener: any;
  subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeMenuIndex = null;
      }
    });
  }

  // changeTheme(event: Event, theme: string, dark: boolean) {
  //   let themeElement = document.getElementById('theme-link');
  //   themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.config.theme, theme));
  //   this.configService.updateConfig({...this.config, ...{theme, dark}});
  //   this.activeMenuIndex = null;
  //   event.preventDefault();
  // }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

  toggleMenu(event: Event, index: number) {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
    event.preventDefault();
  }

  /*
   点击菜单项后，是否显示下级菜单条目
   */
  onOverlayMenuEnter(event: AnimationEvent) {
    switch (event.toState) {
      case 'visible':
        this.bindOutsideClickListener();
        break;

      case 'void':
        this.unbindOutsideClickListener();
        break;
    }
  }

  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event) => {
        if (this.isOutsideTopbarMenuClicked(event)) {
          this.activeMenuIndex = null;
        }
      };

      document.addEventListener('click', this.outsideClickListener);
    }
  }

  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener('click', this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }

  isOutsideTopbarMenuClicked(event): boolean {
    return !(this.topbarMenu.nativeElement.isSameNode(event.target) || this.topbarMenu.nativeElement.contains(event.target));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
