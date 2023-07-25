import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ERoute } from './enums/route';
import { ApiOperation } from '@nestjs/swagger';
import {DataDto} from "./dto/data.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    description: 'Send array in order to filter false values',
  })
  @Post(ERoute.SendTask)
  async sendTask(@Body() data: DataDto) {
    return this.appService.sendTask(data);
  }
}
