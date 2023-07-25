import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

export const microservicesConfig: NestMicroserviceOptions &
  MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [process.env.RMQ_URL],
    queue: process.env.QUEUE,
    queueOptions: {
      durable: false,
    },
  },
};

export const envConfig: ConfigModuleOptions = {
  ignoreEnvFile: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.number().required(),
    QUEUE: Joi.string().required(),
    RMQ_URL: Joi.string().required(),
  }),
};
