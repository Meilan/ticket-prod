/*
  Warnings:

  - The values [HIGHT] on the enum `Ticket_priority` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `ticket` MODIFY `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL DEFAULT 'MEDIUM';
