import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'

import { MainModule } from './main.module'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableCors()
  await app.listen(3000)
}
bootstrap()
