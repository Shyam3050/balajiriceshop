import { Client,Account,Databases } from "appwrite";

const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("646781180dcc1c364b27")
export const account = new Account(client)
export const databases = new Databases(client, "6468c1f6f3cd755ecc5d")