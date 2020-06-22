import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = { hello: "Deno" };
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id) {
      context.response.body = context.params.id;
    }
  });

//TODO: 로그인, 로그아웃, 리스트, 상세, CRUD

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "error";
});

await app.listen({ port: 8080 });
