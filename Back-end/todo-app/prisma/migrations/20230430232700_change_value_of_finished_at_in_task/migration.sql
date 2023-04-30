-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "finished_at" SET DATA TYPE TEXT;
