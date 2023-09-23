// import { ApolloClient, InMemoryCache } from '@apollo/client'
// export  const client = new ApolloClient({
//   uri: 'https://api-sa-east-1.hygraph.com/v2/clebqn9bw2viw01ujea9od50p/master',
//   cache: new InMemoryCache() // pode usar outras formas, como localStorage
// })  

import { ApolloClient, InMemoryCache } from '@apollo/client'
export  const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clebqn9bw2viw01ujea9od50p/master',
  cache: new InMemoryCache() // pode usar outras formas, como localStorage
})