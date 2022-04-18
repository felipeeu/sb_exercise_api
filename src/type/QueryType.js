import { GraphQLObjectType, GraphQLList } from "graphql";
import { Contact } from "./ContactType";
import { ContactsInputFilter } from "./ContactsInputFilter";

const Query = new GraphQLObjectType({
  name: "Query",
  description: "Root",
  fields: () => ({
    contacts: {
      type: new GraphQLList(Contact),
      description: "Contact List",
      args: {
        filter: { type: ContactsInputFilter },
      },
    },
  }),
});

export { Query };
