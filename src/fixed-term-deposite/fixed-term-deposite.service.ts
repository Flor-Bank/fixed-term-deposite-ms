import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';

import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';

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
    return this.fixedTermDeposite.create({
      data: createFixedTermDepositeDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalItems = await this.fixedTermDeposite.count();
    const lastPage = Math.ceil(totalItems / limit);

    return {
      data: await this.fixedTermDeposite.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      meta: {
        totalItems: totalItems,
        page: page,
        lastPage: lastPage,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} fixedTermDeposite`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixedTermDeposite`;
  }
}
