/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `addressIdAddress` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `sportsIdSports` on the `Match` table. All the data in the column will be lost.
  - Added the required column `CEP` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UF` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressNumber` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availableVacancies` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdFor` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSports` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Address";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Match" (
    "idMatch" TEXT NOT NULL PRIMARY KEY,
    "availableVacancies" INTEGER NOT NULL,
    "createdFor" DATETIME NOT NULL,
    "CEP" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "idSports" TEXT NOT NULL,
    "onwerUser" TEXT NOT NULL,
    CONSTRAINT "Match_idSports_fkey" FOREIGN KEY ("idSports") REFERENCES "Sports" ("idSports") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Match_onwerUser_fkey" FOREIGN KEY ("onwerUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Match" ("idMatch", "onwerUser") SELECT "idMatch", "onwerUser" FROM "Match";
DROP TABLE "Match";
ALTER TABLE "new_Match" RENAME TO "Match";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
