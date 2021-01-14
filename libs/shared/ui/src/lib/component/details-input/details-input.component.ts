import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zy-ui-details-input',
  templateUrl: './details-input.component.html',
  styleUrls: ['./details-input.component.scss']
})
export class DetailsInputComponent implements OnInit {
  @Input()
  public value: string;
  @Input()
  public lable="标签";
  @Input()
  public rows=0;

  constructor() { }

  ngOnInit(): void {
  }

}
