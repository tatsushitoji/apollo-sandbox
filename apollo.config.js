module.exports = {
  client: {
    includes: ['src/graphql/*.ts'],
    service: {
      localSchemaFile: "schema.json",
      name: "apollo-sandbox",
      url: "http://localhost:4000/graphql",
    }
  }
}