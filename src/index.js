import "dotenv/config";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { ContactSchema } from "./graphql";

const app = express();

app.use("/graphql", graphqlHTTP({ ContactSchema }));

app.listen(process.env.PORT, () =>
  console.log(`Listening on port:  ${process.env.PORT}`)
);
