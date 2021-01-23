import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { BroadcastService, BroadcastTypes } from '../broadcast/broadcast.service';

@Injectable({ providedIn: 'root' })
export class NotificationReceiverService {
  constructor(
    private translationService: TranslateService,
    private broadcast: BroadcastService,
    private messageService: MessageService
  ) {
    broadcast.on(BroadcastTypes.SHOW_MESSAGE).subscribe(notification => {
      const message = notification as Message;
      if (message) {
        this.messageService.add({
          severity: message.severity,
          life: message.life,
          summary: message.summary,
          detail: message.detail
        });
      }
    });
  }
}
