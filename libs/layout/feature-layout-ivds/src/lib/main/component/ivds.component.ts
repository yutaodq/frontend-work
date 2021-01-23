import { Component, OnInit } from '@angular/core';
import { NotificationReceiverService } from '@zy/shared/util';
import { of, Subscription } from 'rxjs';
@Component({
  selector: 'layout-ivds',
  templateUrl: './ivds.component.html',
  styleUrls: ['./ivds.component.scss']
})
export class IvdsComponent  implements OnInit {
  private subscriptions: Array<Subscription> = [];

  logo = require('../../../../assets/images/logo.svg').default;
  menuActive: boolean;

  title = 'component';

  onMenuButtonClick() {
    this.menuActive = true;
    this.addClass(document.body, 'blocked-scroll');
  }
  addClass(element: any, className: string) {
    if (element.classList)
      element.classList.add(className);
    else
      element.className += ' ' + className;
  }
  hideMenu() {
    this.menuActive = false;
    this.removeClass(document.body, 'blocked-scroll');
  }
  removeClass(element: any, className: string) {
    if (element.classList)
      element.classList.remove(className);
    else
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  constructor(
    public notificationReceiverService: NotificationReceiverService
  ) {

}
  onMaskClick() {
    this.hideMenu();
  }
  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
    )
  }

  /*

    */
  ngOnInit() {
    this.registerEvents();
  }


}
