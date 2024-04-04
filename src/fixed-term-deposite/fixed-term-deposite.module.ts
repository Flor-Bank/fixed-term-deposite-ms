import { Module } from '@nestjs/common';
import { FixedTermDepositeService } from './fixed-term-deposite.service';
import { FixedTermDepositeController } from './fixed-term-deposite.controller';

@Module({
  controllers: [FixedTermDepositeController],
  providers: [FixedTermDepositeService],
})
export class FixedTermDepositeModule {}
