import { Migration } from "https://deno.land/x/nessie/mod.ts";
import { Schema } from "https://deno.land/x/nessie/qb.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

/** Runs on migrate */
export const up: Migration<Schema> = async ({ queryBuilder }) => {
  // 1. 쿼리날리기
  // 2. 인자로 쿼리빌더 넘기기 (exposeQueryBuilder: true 일때만.)
  queryBuilder.create("Users", (table) => {
    table.string("userId", 36).primary().notNullable();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("password", 255).notNullable();
    table.timestamps(); // 자동으로 createdAt, updatedAt 생김
  });

  const userId = v4.generate();
  const name = "Ellapresso";
  const email = "ellapresso@gmail.com";
  const hashed = await bcrypt.hash("deno1234");

  queryBuilder.queryString(
    `INSERT INTO Users VALUES ('${userId}','${name}','${email}','${hashed}',DEFAULT, DEFAULT)`,
  );
  return queryBuilder.query;
};
// 마이그레이트

/** Runs on rollback */
export const down: Migration<Schema> = ({ queryBuilder }) => {
  return queryBuilder.drop("Users");
};
// 롤백
