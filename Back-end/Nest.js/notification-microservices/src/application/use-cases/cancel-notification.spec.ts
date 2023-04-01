import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import Content from '../entities/content';
import Notification from '../entities/notification';
import { CancelNotification } from './cancel-notification';
import NotificationNotFound from './errors/notification-not-found';

const mockNewNotification = {
  recipientId: 'id',
  category: 'social',
  content: new Content('notification message'),
};

const mockNotificationsRepository = new InMemoryNotificationsRepository();

const cancelNotification = new CancelNotification(mockNotificationsRepository);

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notification = new Notification(mockNewNotification);

    await mockNotificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(
      mockNotificationsRepository.notificationsDatabase[0].canceledAt,
    ).toEqual(expect.any(Date));
  });

  it('should not be able to cancel a non existing notification', async () => {
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
