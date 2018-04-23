import React from 'react'
import glamorous from 'glamorous-native'
import { Query } from 'react-apollo'
import { FlatList, Dimensions, Image, View, Text } from 'react-native'
import gql from 'graphql-tag'

import Destination from './Destination'

const query = gql`
  {
    walks {
      id
      neighborhood
      destinations {
        id
        city
        hero
        name
      }
    }
  }
`

const WalkResult = glamorous.view({
  marginBottom: 20
})

const NeighborhoodTitle = glamorous.text({
  fontWeight: '700',
  letterSpacing: 0.3,
  paddingHorizontal: 20
})

export default class WalkList extends React.PureComponent {
  renderLoading() {
    return <Text>Loading...</Text>
  }
  renderError() {
    return <Text>Error loading walks.</Text>
  }

  renderItem({ item }) {
    return (
      <WalkResult>
        <NeighborhoodTitle>{item.neighborhood.toUpperCase()}</NeighborhoodTitle>

        <FlatList
          data={item.destinations}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Destination destination={item} />}
        />
      </WalkResult>
    )
  }

  render() {
    return (
      <Query query={query}>
        {({loading, error, data}) => {
          if (loading) return this.renderLoading()
          if (error) return this.renderError()

          return (
            <FlatList
              data={data.walks}
              keyExtractor={item => `${item.id}`}
              renderItem={(...args) => this.renderItem(...args)}
            />
          )
        }}
      </Query>
    )
  }
}
