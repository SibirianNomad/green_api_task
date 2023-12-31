import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { M2_SERVICE_NAME } from './microservices/microservices.constants';
import { firstValueFrom } from 'rxjs';
import { EServiceM1MQ } from './microservices/enums/mq-names';
import { DataDto } from './dto/data.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger('service_m1');

  constructor(
    @Inject(M2_SERVICE_NAME)
    private m2ServiceClient: ClientProxy,
  ) {}
  sendTask(data: DataDto) {
    try {
      return firstValueFrom(
        this.m2ServiceClient.send<any, { data: Array<any> }>(
          { cmd: EServiceM1MQ.SendTask },
          { data: data.array },
        ),
      );
    } catch (e) {
      this.logger.error(e.message);
    }
  }
}
