import { buildSchema } from "graphql";
const ContactSchema = buildSchema(`
type Contact {
  _id: String
  picture: String
  birthday: String
  name: String
  address: String
  phone_number: String }
  
type Query {
  contact(_id:String): Contact
}
`);

export { ContactSchema };
