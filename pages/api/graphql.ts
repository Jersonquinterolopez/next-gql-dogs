import { ApolloServer } from "apollo-server-micro";
import "reflect-metadata"
import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Dog {
  @Field(type => ID)
  name: string;
}
  
@Resolver(Dog)
export class DogResolver {
    @Query(() => [Dog])
    dogs() : Dog[] {
        return [{name: "Rufus"}, {name: "Spot"}];
    }
}

const schema = await buildSchema({
    resolvers: [DogResolver],
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

export default async function (req, res) {
    // start the server
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res); 
}
