import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class FixedTermDepositeService
  extends PrismaClient
  implements OnModuleInit
{
  async onModuleInit() {
    await this.$connect();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createFixedTermDepositeDto: CreateFixedTermDepositeDto) {
    return 'This action adds a new fixedTermDeposite';
  }

  findAll() {
    return `This action returns all fixedTermDeposite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fixedTermDeposite`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixedTermDeposite`;
  }
}
