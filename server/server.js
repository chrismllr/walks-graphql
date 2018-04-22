const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema')

const app = express()
const PORT = process.env.PORT || 4240

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

app.get(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`)
})
