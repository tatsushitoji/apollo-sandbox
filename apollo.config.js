module.exports = {
  client: {
    includes: ['src/graphql/*.ts'],
    service: {
      name: "apollo-sandbox",
      url: "http://localhost:4000/graphql",
    }
  }
}