import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { NotificationReceiverService } from './notificationReceiver.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BroadcastService, BroadcastTypes } from '../broadcast/broadcast.service';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [NotificationReceiverService, MessageService, BroadcastService, TranslateService]
    });
  });

  it('should be created', inject([NotificationReceiverService], (service: NotificationReceiverService) => {
    expect(service).toBeTruthy();
  }));
});
