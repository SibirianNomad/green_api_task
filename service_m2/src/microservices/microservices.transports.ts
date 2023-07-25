import { Provider } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { M2_SERVICE_NAME } from './microservices.constants';

export const transports: Provider[] = [
  {
    provide: M2_SERVICE_NAME,
    useValue: ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL],
        queue: 'm1_project',
        queueOptions: {
          durable: false,
        },
      },
    }),
  },
];
