const Walks = [
  {
    id: 2,
    neighborhood: 'Shimo-Kitazawa',
    userId: 1,
    destinationIds: [1, 2]
  }
]

const Users = [
  {
    id: 1,
    firstName: 'Chris',
    lastName: 'Miller'
  }
]

const Destinations = [
  {
    id: 1,
    name: 'Bear Pond Espresso',
    address1: '2 Chome-36-12',
    city: 'Kitazawa, Tokyo',
    hero: 'https://www.bear-pond.com/images/main/main03.jpg',
    coordinates: {
      lat: 35.6631403,
      long: 139.667285
    }
  },
  {
    id: 2,
    name: 'Jet Set Tokyo',
    address1: '2 Chome-33-12',
    city: 'Kitazawa, Tokyo',
    hero: 'https://www.residentadvisor.net/images/features/2015/roundtable-recordshops-jet05.jpg',
    coordinates: {
      lat: 35.6628766,
      long: 139.6690632
    }
  }
]

module.exports = {
  Walks,
  Destinations,
  Users
}
