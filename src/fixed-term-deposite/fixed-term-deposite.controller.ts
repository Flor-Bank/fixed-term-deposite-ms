import { Controller, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FixedTermDepositeService } from './fixed-term-deposite.service';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller()
export class FixedTermDepositeController {
  constructor(
    private readonly fixedTermDepositeService: FixedTermDepositeService,
  ) {}

  @MessagePattern('fixedTermDeposite.create')
  create(@Payload() createFixedTermDepositeDto: CreateFixedTermDepositeDto) {
    return this.fixedTermDepositeService.create(createFixedTermDepositeDto);
  }

  @MessagePattern('fixedTermDeposite.findAll')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.fixedTermDepositeService.findAll(paginationDto);
  }

  @MessagePattern('findOneFixedTermDeposite')
  findOne(@Payload() id: number) {
    return this.fixedTermDepositeService.findOne(id);
  }

  @MessagePattern('removeFixedTermDeposite')
  remove(@Payload() id: number) {
    return this.fixedTermDepositeService.remove(id);
  }
}
