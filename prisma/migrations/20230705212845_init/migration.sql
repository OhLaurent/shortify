-- CreateTable
CREATE TABLE "Url" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_id_key" ON "Url"("id");
