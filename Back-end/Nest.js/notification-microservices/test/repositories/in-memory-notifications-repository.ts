import Notification from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notificationsDatabase: Notification[] = [];

  async create(notification: Notification) {
    this.notificationsDatabase.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notificationsDatabase.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notificationsDatabase.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0)
      this.notificationsDatabase[notificationIndex] = notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notificationsDatabase.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notificationsDatabase.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
}
