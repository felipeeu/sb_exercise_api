import { GraphQLSchema } from "graphql";
import { Query, Mutation } from "./type/QueryType";

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
