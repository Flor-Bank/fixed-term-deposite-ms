import { Injectable } from '@nestjs/common';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';
import { UpdateFixedTermDepositeDto } from './dto/update-fixed-term-deposite.dto';

@Injectable()
export class FixedTermDepositeService {
  create(createFixedTermDepositeDto: CreateFixedTermDepositeDto) {
    return 'This action adds a new fixedTermDeposite';
  }

  findAll() {
    return `This action returns all fixedTermDeposite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fixedTermDeposite`;
  }

  update(id: number, updateFixedTermDepositeDto: UpdateFixedTermDepositeDto) {
    return `This action updates a #${id} fixedTermDeposite`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixedTermDeposite`;
  }
}
