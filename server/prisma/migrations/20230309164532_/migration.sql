/*
  Warnings:

  - You are about to drop the `_MatchToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `onwerUser` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_MatchToUser_B_index";

-- DropIndex
DROP INDEX "_MatchToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_MatchToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Match" (
    "idMatch" TEXT NOT NULL PRIMARY KEY,
    "sportsIdSports" TEXT NOT NULL,
    "addressIdAddress" TEXT NOT NULL,
    "onwerUser" TEXT NOT NULL,
    CONSTRAINT "Match_sportsIdSports_fkey" FOREIGN KEY ("sportsIdSports") REFERENCES "Sports" ("idSports") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Match_addressIdAddress_fkey" FOREIGN KEY ("addressIdAddress") REFERENCES "Address" ("idAddress") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Match_onwerUser_fkey" FOREIGN KEY ("onwerUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Match" ("addressIdAddress", "idMatch", "sportsIdSports") SELECT "addressIdAddress", "idMatch", "sportsIdSports" FROM "Match";
DROP TABLE "Match";
ALTER TABLE "new_Match" RENAME TO "Match";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
