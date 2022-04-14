import { ApolloServer } from "apollo-server-micro";
import "reflect-metadata"
import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql";

import { DogsResolver } from "../../src/schema/dogs.resolver";

const schema = await buildSchema({
    resolvers: [DogsResolver],
});

// initialize apollo server
const server = new ApolloServer({
     schema
});


// with this we specify that we dont want to do an able a body parser
export const config =   {
    api : {
        bodyParser : false
    }
}


// start the server
const startServer = server.start()

// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
    // start the server
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res); 
}
