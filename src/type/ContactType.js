import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

const stringNonNull = { type: new GraphQLNonNull(GraphQLString) };

const Contact = new GraphQLObjectType({
  name: "Contact",
  description: "Represent a contact",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    picture: stringNonNull,
    birthday: stringNonNull,
    name: stringNonNull,
    address: stringNonNull,
    phone_number: stringNonNull,
  }),
});
export { Contact };
