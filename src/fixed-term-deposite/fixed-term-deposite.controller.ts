import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FixedTermDepositeService } from './fixed-term-deposite.service';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';
import { UpdateFixedTermDepositeDto } from './dto/update-fixed-term-deposite.dto';

@Controller()
export class FixedTermDepositeController {
  constructor(
    private readonly fixedTermDepositeService: FixedTermDepositeService,
  ) {}

  @MessagePattern('createFixedTermDeposite')
  create(@Payload() createFixedTermDepositeDto: CreateFixedTermDepositeDto) {
    return this.fixedTermDepositeService.create(createFixedTermDepositeDto);
  }

  @MessagePattern('findAllFixedTermDeposite')
  findAll() {
    return this.fixedTermDepositeService.findAll();
  }

  @MessagePattern('findOneFixedTermDeposite')
  findOne(@Payload() id: number) {
    return this.fixedTermDepositeService.findOne(id);
  }

  @MessagePattern('updateFixedTermDeposite')
  update(@Payload() updateFixedTermDepositeDto: UpdateFixedTermDepositeDto) {
    return this.fixedTermDepositeService.update(
      updateFixedTermDepositeDto.id,
      updateFixedTermDepositeDto,
    );
  }

  @MessagePattern('removeFixedTermDeposite')
  remove(@Payload() id: number) {
    return this.fixedTermDepositeService.remove(id);
  }
}
