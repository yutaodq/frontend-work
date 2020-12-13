import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'zy-ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('overlayMenuAnimation', [
      transition(':enter', [
        style({opacity: 0, transform: 'scaleY(0.8)'}),
        animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
      ]),
      transition(':leave', [
        animate('.1s linear', style({ opacity: 0 }))
      ])
    ])
  ]

})
export class NavbarComponent implements OnInit {
  @Input()  logo;
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  activeMenuIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeMenuIndex = null;
      }
    });
  }
  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

    toggleMenu(event: Event, index: number) {
      this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
      event.preventDefault();
    }

}
