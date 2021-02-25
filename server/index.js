const { authors, books } = require('./sampleInfo.js');

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'Hello, world!'
            }
        })
    })
})

const PORT = 5000;
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});