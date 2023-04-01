import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import NotificationNotFound from './errors/notification-not-found';
import { UnreadNotification } from './unread-notification';

const mockNotificationsRepository = new InMemoryNotificationsRepository();
const unreadNotification = new UnreadNotification(mockNotificationsRepository);

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notification = makeNotification({ readAt: new Date() });

    await mockNotificationsRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(
      mockNotificationsRepository.notificationsDatabase[0].readAt,
    ).toBeNull();
  });

  it('should not be able to read a non existing notification', async () => {
    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
