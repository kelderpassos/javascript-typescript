import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import Content from '../entities/content';
import Notification from '../entities/notification';
import NotificationNotFound from './errors/notification-not-found';
import { ReadNotification } from './read-notification';

const mockNewNotification = {
  recipientId: 'id',
  category: 'social',
  content: new Content('notification message'),
};

const mockNotificationsRepository = new InMemoryNotificationsRepository();

const readNotification = new ReadNotification(mockNotificationsRepository);

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notification = new Notification(mockNewNotification);

    await mockNotificationsRepository.create(notification);

    await readNotification.execute({ notificationId: notification.id });

    expect(mockNotificationsRepository.notificationsDatabase[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
