import { Application } from "https://raw.githubusercontent.com/oakserver/oak/main/mod.ts";
import { config } from "https://raw.githubusercontent.com/pietvanzoen/deno-dotenv/master/mod.ts";
import router from "./routes.ts";
import notFound from "./not_found.ts";

const env = config();
const port = Number(env.PORT) || 8080;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(notFound);

await app.listen({ port });
