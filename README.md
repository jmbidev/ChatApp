# A custom Node + GraphQL (Apollo Server) boilerplate

This is my boilerplate for Node and GraphQL (supports Subscriptions).

## Skeleton

- `dist`: Distribution folder. It contains transpiled files.
- `src`: Source code folder.
  - `schema`: GraphQL schema files.
    - `resolvers`: Resolver files (Javascript code). Here you can write your
      resolver methods by creating JS files exporting an object with the
      resolvers. Example:
      
      ```javascript
      const resolvers = {
        Query: {
	      people: (_, args) => ([{ firstname: 'Abel', lastname: 'Osorio' }])
	    }
      };

      export default resolvers;
      ```
      All the files will be merged into a single file.
    - `types`: Type files (GraphQL code). Here you will write your types in
      GraphQL code. Also, this is the place to define Queries, Mutations,
      Subscriptions, Inputs, or any other kind of type for your schema. Example:
      ```graphql
      type Person {
        firstname: String
	    lastname: String
      }

      extend type Query {
        people: [person]
      }
      ```
      Again, all these files will be merged into a single file, so make
      sure of extending from the root types.

## Dependencies

It has a very few dependencies (as you can see in the package.json file):

- apollo-server-express
- dotenv
- express
- graphql
- http
- lodash

And other dev dependencies to run the project and transpile it:

- @babel/cli
- @babel/core
- @babel/node
- @babel/preset-env
- babel-plugin-root-import
- nodemon
