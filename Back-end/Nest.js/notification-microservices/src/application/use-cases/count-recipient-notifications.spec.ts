import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import Content from '../entities/content';
import Notification from '../entities/notification';
import { CountRecipientNotifications } from './count-recipient-notifications';

const mockNewNotification = {
  recipientId: 'id',
  category: 'social',
  content: new Content('notification message'),
};

const mockNotificationsRepository = new InMemoryNotificationsRepository();

const countRecipientNotifications = new CountRecipientNotifications(
  mockNotificationsRepository,
);

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notification = new Notification(mockNewNotification);

    await mockNotificationsRepository.create(notification);
    await mockNotificationsRepository.create(notification);
    await mockNotificationsRepository.create(
      new Notification({ ...mockNewNotification, recipientId: 'id2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'id',
    });

    expect(count).toEqual(2);
  });
});
