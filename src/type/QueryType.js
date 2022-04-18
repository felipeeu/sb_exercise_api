import { GraphQLObjectType, GraphQLList } from "graphql";
import { Contact } from "./ContactType";
import { ContactsInputFilter } from "./ContactsInputFilter";
import { contactFilters } from "../resolvers";
import db from "../data/contacts.json";

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
      resolve: (_, args) => contactFilters(db, args),
    },
  }),
});

export { Query };
