-- CreateTable
CREATE TABLE "Match" (
    "idMatch" TEXT NOT NULL PRIMARY KEY,
    "sportsIdSports" TEXT NOT NULL,
    "addressIdAddress" TEXT NOT NULL,
    CONSTRAINT "Match_sportsIdSports_fkey" FOREIGN KEY ("sportsIdSports") REFERENCES "Sports" ("idSports") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Match_addressIdAddress_fkey" FOREIGN KEY ("addressIdAddress") REFERENCES "Address" ("idAddress") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sports" (
    "idSports" TEXT NOT NULL PRIMARY KEY,
    "sportName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Game" (
    "idGame" TEXT NOT NULL PRIMARY KEY,
    "idParticipants" TEXT NOT NULL,
    "idMatch" TEXT NOT NULL,
    CONSTRAINT "Game_idParticipants_fkey" FOREIGN KEY ("idParticipants") REFERENCES "Participants" ("idParticipants") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Game_idMatch_fkey" FOREIGN KEY ("idMatch") REFERENCES "Match" ("idMatch") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "idAddress" TEXT NOT NULL PRIMARY KEY,
    "CEP" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Participants" (
    "idParticipants" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "idMatch" TEXT NOT NULL,
    CONSTRAINT "Participants_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Participants_idMatch_fkey" FOREIGN KEY ("idMatch") REFERENCES "Match" ("idMatch") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "matchIdMatch" TEXT,
    CONSTRAINT "User_matchIdMatch_fkey" FOREIGN KEY ("matchIdMatch") REFERENCES "Match" ("idMatch") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_idParticipants_idMatch_key" ON "Game"("idParticipants", "idMatch");

-- CreateIndex
CREATE UNIQUE INDEX "Participants_idUser_idMatch_key" ON "Participants"("idUser", "idMatch");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
