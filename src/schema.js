import { GraphQLSchema } from "graphql";
import { Query } from "./type/QueryType";
import { Mutation } from "./type/MutationType";

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
