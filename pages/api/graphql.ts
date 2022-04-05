import { ApolloServer } from "apollo-server-micro";

// initialize apollo server
const server = new ApolloServer({
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
