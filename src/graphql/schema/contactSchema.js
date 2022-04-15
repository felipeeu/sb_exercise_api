import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from "graphql";
import { getContacts } from "../resolvers/contactResolvers";

const stringNonNull = { type: new GraphQLNonNull(GraphQLString) };

const Contact = new GraphQLObjectType({
  name: "Contact",
  description: "Represent all contacts",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    picture: stringNonNull,
    birthday: stringNonNull,
    name: stringNonNull,
    address: stringNonNull,
    phone_number: stringNonNull,
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Root",
  fields: () => ({
    contacts: {
      type: new GraphQLList(Contact),
      description: "Contact List",
      resolve: getContacts,
    },
  }),
});

const ContactSchema = new GraphQLSchema({
  query: Query,
});

export { ContactSchema };
