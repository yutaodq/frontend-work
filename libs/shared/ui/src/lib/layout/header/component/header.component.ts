import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zy-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
