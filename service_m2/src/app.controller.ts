import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EServiceM2MQ } from './enums/mq-names';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: EServiceM2MQ.SendTask })
  filterArray(@Payload() data: { data: any[] }) {
    return this.appService.filterArray(data.data);
  }
}
