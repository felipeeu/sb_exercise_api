import "dotenv/config";
import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "dev",
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port:  ${process.env.PORT}`)
);
