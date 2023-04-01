import { randomUUID } from 'node:crypto';
import { Replace } from '../helpers/replace';
import INotification from '../interfaces/INotification';
import Content from './content';

export default class Notification {
  private props: INotification;
  private _id: string;

  constructor(
    props: Replace<INotification, { createdAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(id) {
    this.props.recipientId = id;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category) {
    this.props.category = category;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
}
