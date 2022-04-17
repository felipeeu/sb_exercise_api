import { GraphQLSchema } from "graphql";
import { Query } from "./type/QueryType";

export const schema = new GraphQLSchema({
  query: Query,
});
