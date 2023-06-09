import { Injectable } from '@nestjs/common';
import Notification from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

export interface IGetRecipientNotificationsRequest {
  recipientId: string;
}

export interface IGetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: IGetRecipientNotificationsRequest,
  ): Promise<IGetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
