module.exports = `
  type User {
    id: Int!
    firstName: String
    lastName: String
    walks: [Walk]
  }

  type Walk {
    id: Int!
    neighborhood: String
    user: [User]
  }

  type Query {
    walks: [Walk]
    user(id: Int!): User
  }
`
