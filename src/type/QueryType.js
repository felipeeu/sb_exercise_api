import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} from "graphql";
import { Contact } from "./ContactType";
import db from "../data/contacts.json";

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Root",
  fields: () => ({
    contacts: {
      type: new GraphQLList(Contact),
      description: "Contact List",
      resolve: async () => await db,
    },
    contact: {
      type: Contact,
      description: "Contact by ID ",
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: async (_, { _id }) =>
        await db.find((contact) => contact._id === _id),
    },
  }),
});

export { Query };
