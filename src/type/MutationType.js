import { GraphQLNonNull, GraphQLString, GraphQLObjectType } from "graphql";
import { Contact } from "./ContactType";

const stringNonNull = { type: new GraphQLNonNull(GraphQLString) };

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createContact: {
      type: Contact,
      description: "Create a contact",
      args: {
        picture: stringNonNull,
        birthday: stringNonNull,
        name: stringNonNull,
        address: stringNonNull,
        phone_number: stringNonNull,
      },
      resolve: (_, { name }) => console.log(name),
    },
  }),
});
