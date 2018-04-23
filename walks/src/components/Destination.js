import React from 'react'
import glamorous from 'glamorous-native'

const Title = glamorous.text({
  fontSize: 24,
  fontWeight: '800',
  marginBottom: 2
})

const Sub = glamorous.text({
  fontSize: 18,
  opacity: 0.6
})

const DestinationCard = glamorous.view({
  backgroundColor: '#fff',
  borderRadius: 8,
  margin: 20,
  shadowColor: '#000000',
  shadowOpacity: 0.1,
  shadowOffset: { height: 10 },
  shadowRadius: 10,
  elevation: 2
})

const ImageContainer = glamorous.view({
  overflow: 'hidden',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8
})

const Contents = glamorous.view({
  padding: 20
})

const Hero = glamorous.image({
  height: 300,
  resizeMode: 'cover'
})

export default class Destination extends React.PureComponent {
  render() {
    const {
      destination: {
        hero,
        name,
        city
      }
    } = this.props;

    return (
      <DestinationCard>
        <ImageContainer>
          <Hero source={{ uri: hero }} />
        </ImageContainer>
        <Contents>
          <Title>{name}</Title>
          <Sub>{city}</Sub>
        </Contents>
      </DestinationCard>
    )
  }
}
