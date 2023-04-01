import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

const mockNewNotification = {
  recipientId: 'id',
  category: 'social',
  content: 'notification message',
};

const mockNotificationsRepository = new InMemoryNotificationsRepository();

const newNotification = new SendNotification(mockNotificationsRepository);

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    await newNotification.execute(mockNewNotification);

    expect(mockNotificationsRepository.notificationsDatabase).toHaveLength(1);
  });
});
