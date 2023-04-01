import { Injectable } from '@nestjs/common';
import Notification from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mapper/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: { recipientId },
    });

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: { recipientId },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async create(notification: Notification) {
    const mapped = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: mapped,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) return null;

    return PrismaNotificationMapper.toDomain(notification);
  }

  async save(notification: Notification): Promise<void> {
    const mapped = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.update({
      where: {
        id: mapped.id,
      },
      data: mapped,
    });
  }
}
