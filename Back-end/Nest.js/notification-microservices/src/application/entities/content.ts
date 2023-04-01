export default class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validation(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isValidContent = this.validation(content);

    if (!isValidContent) {
      throw new Error('Content should be between 5 and 240 characters');
    }

    this.content = content;
  }
}
