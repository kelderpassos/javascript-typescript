import Content from '../../src/application/entities/content';
import Notification from '../../src/application/entities/notification';
import INotification from '../../src/application/interfaces/INotification';

type Override = Partial<INotification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'id',
    category: 'social',
    content: new Content('notification message'),
    ...override,
  });
}
