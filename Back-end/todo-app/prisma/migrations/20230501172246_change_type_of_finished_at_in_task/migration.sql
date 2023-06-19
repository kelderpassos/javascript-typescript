/*
  Warnings:

  - Changed the type of `finished_at` on the `tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "finished_at",
ADD COLUMN     "finished_at" TIMESTAMP(3) NOT NULL;
