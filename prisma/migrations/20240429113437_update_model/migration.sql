-- CreateEnum
CREATE TYPE "fixedTermDepositeStatus" AS ENUM ('ACTIVE', 'MATURED', 'CLOSED');

-- CreateTable
CREATE TABLE "FixedTermDeposite" (
    "id" SERIAL NOT NULL,
    "amount_to_invest" DOUBLE PRECISION NOT NULL,
    "status" "fixedTermDepositeStatus" NOT NULL,
    "maturity_date" TIMESTAMP(3) NOT NULL,
    "interest_rate" DOUBLE PRECISION NOT NULL,
    "interest_rate_amount" DOUBLE PRECISION NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FixedTermDeposite_pkey" PRIMARY KEY ("id")
);
