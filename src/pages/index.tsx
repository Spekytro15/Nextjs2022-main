import Head from 'next/head'


import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>


      <h1>Mateus </h1>
      <p>Next-com a lib PrimeVue</p>
    </Container>
  )
}

export default Home
