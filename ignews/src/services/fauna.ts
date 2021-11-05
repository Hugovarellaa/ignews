import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.CLIENT_KEY_SECRET,
});
