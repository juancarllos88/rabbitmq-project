import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class UserScheduler {
  //@Cron(CronExpression.EVERY_5_SECONDS)
  userJob() {
    console.log('Job is runing');
  }
}
