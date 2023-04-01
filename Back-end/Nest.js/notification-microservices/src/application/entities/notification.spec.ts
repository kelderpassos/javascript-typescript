import Content from './content';
import Notification from './notification';

const mockNotification = {
  recipientId: 'string',
  content: new Content('Nova solicitação'),
  category: 'social',
  createdAt: new Date(),
};

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const content = new Notification(mockNotification);

    expect(content).toBeTruthy();
  });
});
