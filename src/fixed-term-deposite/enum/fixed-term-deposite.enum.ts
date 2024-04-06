import { fixedTermDepositeStatus } from '@prisma/client';

export const FixedTermDepositeStatusList = [
  fixedTermDepositeStatus.ACTIVE,
  fixedTermDepositeStatus.MATURED,
  fixedTermDepositeStatus.CLOSED,
];
