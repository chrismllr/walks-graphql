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
    user: User
    destinations: [Destination]
  }

  type Coords {
    lat: Int
    long: Int
  }

  type Destination {
    id: Int!
    name: String
    address1: String
    city: String
    hero: String
    coordinates: Coords
    walk: Walk
  }

  type Query {
    walks: [Walk]
    user(id: Int!): User
  }
`
