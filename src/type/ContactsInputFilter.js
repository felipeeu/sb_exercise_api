import { GraphQLID, GraphQLString, GraphQLInputObjectType } from "graphql";

const stringType = { type: GraphQLString };

const ContactsInputFilter = new GraphQLInputObjectType({
  name: "ContactInput",
  description: "Represent a contact input",

  fields: () => ({
    _id: { type: GraphQLID },
    picture: stringType,
    birthday: stringType,
    name: stringType,
    address: stringType,
    phone_number: stringType,
  }),
});
export { ContactsInputFilter };
