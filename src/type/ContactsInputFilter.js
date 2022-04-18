import { GraphQLString, GraphQLInputObjectType } from "graphql";

const stringType = { type: GraphQLString };

const ContactsInputFilter = new GraphQLInputObjectType({
  name: "ContactInput",
  description: "Represent a contact input",

  fields: () => ({
    input: stringType,
  }),
});
export { ContactsInputFilter };
