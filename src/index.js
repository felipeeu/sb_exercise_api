import "dotenv/config";
import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import db from "./data/contacts.json";

const app = express();
app.use(cors());

const root = {
  contact: ({ _id }) => {
    return db.find((contact) => contact._id === _id);
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "dev",
    rootValue: root,
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port:  ${process.env.PORT}`)
);
