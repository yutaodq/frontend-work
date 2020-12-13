import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zy-ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()  logo;
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

}
