import Dex from "https://deno.land/x/dex/mod.ts";
import client from "./config.ts";

const dex = Dex({ client: "mysql" });

interface Book {
  id: number;
  title: string;
  message: string;
  author: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export interface BookRawData {
  title: string;
  message: string;
  author: string;
  url: string;
}

export async function getBooksByOwnerId(ownerId: string): Promise<Book[]> {
  const selectQuery = dex
    .queryBuilder()
    .select()
    .from("Books")
    .where(
      { ownerId },
    )
    .toString();
  const { rows } = await client.execute(selectQuery);
  if (rows === undefined) throw new Error("query error");
  return rows;
}

export async function createBook(
  book: BookRawData,
  ownerId: string,
): Promise<void> {
  const insertQuery = dex
    .queryBuilder()
    .insert([{ ...book, ownerId }])
    .into("Books")
    .toString();
  console.log(insertQuery);
  await client.execute(insertQuery);
}
