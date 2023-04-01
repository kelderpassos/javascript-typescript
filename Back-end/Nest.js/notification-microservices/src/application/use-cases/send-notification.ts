import { Injectable } from '@nestjs/common';
import Content from '../entities/content';
import Notification from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

export interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { category, recipientId, content } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
