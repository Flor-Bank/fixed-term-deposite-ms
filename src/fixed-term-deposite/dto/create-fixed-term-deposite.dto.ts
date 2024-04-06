import { fixedTermDepositeStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { FixedTermDepositeStatusList } from '../enum/fixed-term-deposite.enum';

export class CreateFixedTermDepositeDto {
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsEnum(FixedTermDepositeStatusList, {
    message: `Allowed status values: ${FixedTermDepositeStatusList}`,
  })
  @IsOptional()
  status: fixedTermDepositeStatus = fixedTermDepositeStatus.ACTIVE;
  @IsOptional()
  @IsDateString() //?or @IsDate()
  termEndDate: Date;
}
