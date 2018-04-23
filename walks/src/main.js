import React from 'react'
import { ApolloProvider } from 'react-apollo'
import Root from './screens/Root'

import client from './service/apolloClient'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    )
  }
}
