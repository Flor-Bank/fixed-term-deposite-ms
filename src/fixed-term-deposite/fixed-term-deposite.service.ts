import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';

import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config';

@Injectable()
export class FixedTermDepositeService
  extends PrismaClient
  implements OnModuleInit
{
  constructor(@Inject(NATS_CLIENT) private readonly client: ClientProxy) {
    super();
  }
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

  async findOne(id: number) {
    try {
      const fixedTermDeposite = await this.fixedTermDeposite.findFirst({
        where: { id },
      });
      if (!fixedTermDeposite) {
        throw new RpcException({
          status: 404,
          message: `fixed term deposite with id ${id} not found`,
        });
      }
      return fixedTermDeposite;
    } catch (error) {
      throw new RpcException({
        status: 400,
        message: error.message,
      });
    }
  }

  remove(id: number) {
    return `This action removes a #${id} fixedTermDeposite`;
  }
}
