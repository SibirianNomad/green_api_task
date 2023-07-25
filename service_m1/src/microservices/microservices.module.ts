import { Module, ValueProvider } from '@nestjs/common';
import { transports } from './microservices.transports';

@Module({
  providers: transports,
  exports: transports.map((transport: ValueProvider) => transport.provide),
})
export class MicroservicesModule {}
