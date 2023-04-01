import { IsNotEmpty, IsString, Length } from 'class-validator';

export default class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
