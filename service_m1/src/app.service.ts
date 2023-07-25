import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { M2_SERVICE_NAME } from './microservices/microservices.constants';
import { firstValueFrom } from 'rxjs';
import { EServiceM1MQ } from './microservices/enums/mq-names';
import { DataDto } from "./dto/data.dto";

@Injectable()
export class AppService {
  constructor(
    @Inject(M2_SERVICE_NAME)
    protected m2ServiceClient: ClientProxy,
  ) {}
  sendTask(data: DataDto) {
    return firstValueFrom(
      this.m2ServiceClient.send<any, { data: Array<any> }>(
        { cmd: EServiceM1MQ.SendTask },
        { data: data.array },
      ),
    );
  }
}
