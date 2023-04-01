import Content from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma notificação');

    expect(content).toBeTruthy();
  });

  it('should throw an error message if the message is shorter than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should throw an error message if the message is longer than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
