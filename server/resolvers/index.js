const find = require('lodash/find')
const filter = require('lodash/filter')

const {
  Walks,
  Users
} = require('../fixtures')

module.exports = {
  Query: {
    walks: () => Walks,
    user: (_, { id }) => find(Users, { id })
  },

  User: {
    walks: user => filter(Walks, { userId: user.id })
  },

  Walk: {
    user: walk => find(Users, { id: walk.userId })
  }
}
