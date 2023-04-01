import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

const mockNotificationsRepository = new InMemoryNotificationsRepository();

const getRecipientNotifications = new GetRecipientNotifications(
  mockNotificationsRepository,
);

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    await mockNotificationsRepository.create(
      makeNotification({ recipientId: 'id' }),
    );
    await mockNotificationsRepository.create(
      makeNotification({ recipientId: 'id' }),
    );
    await mockNotificationsRepository.create(
      makeNotification({ recipientId: 'id2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'id' }),
        expect.objectContaining({ recipientId: 'id' }),
      ]),
    );
  });
});
