import React from 'react'
import { View } from 'react-native'

import Header from '../components/Header'
import WalkList from '../components/WalkList'

export default class RootScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingVertical: 20 }}>
        <Header />
        <WalkList />
      </View>
    )
  }
}
