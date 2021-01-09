import {
  Component,
   Output,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'zy-ui-button-new',
  templateUrl: './zy-button-new-component.html',
  providers: []
})
export class ZyButtonNewComponent  {
  @Output()
  public onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  // ------------------------------

  public onButtonClick(event: Event): void {
    // event.stopPropagation();
    this.onClick.emit(event);
  }

}
