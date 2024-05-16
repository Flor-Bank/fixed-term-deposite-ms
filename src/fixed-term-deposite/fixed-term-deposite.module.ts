import { Module } from '@nestjs/common';
import { FixedTermDepositeService } from './fixed-term-deposite.service';
import { FixedTermDepositeController } from './fixed-term-deposite.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [FixedTermDepositeController],
  providers: [FixedTermDepositeService],
  imports: [NatsModule],
})
export class FixedTermDepositeModule {}
