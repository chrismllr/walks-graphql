import React from 'react'
import { SafeAreaView } from 'react-native'
import glamorous from 'glamorous-native'

const Title = glamorous.text({
  fontSize: 28,
  fontWeight: '800'
})

const HeaderEl = glamorous.view({
  padding: 20,
  paddingTop: 30,
  marginBottom: 16,
  justifyContent: 'center'
})

export default class Header extends React.PureComponent {
  render() {
    return (
      <SafeAreaView>
        <HeaderEl>
          <Title>Walks</Title>
        </HeaderEl>
      </SafeAreaView>
    )
  }
}
