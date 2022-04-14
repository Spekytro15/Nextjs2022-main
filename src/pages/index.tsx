/* eslint-disable import/no-duplicates */
import React from 'react'
import Head from 'next/head'

import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'

import { Button } from 'primereact/button'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const teste = () => {
    alert('oi')
  }
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Button onClick={teste}>Funcionando</Button>

      <h1>Mateus </h1>
      <p>Next-com a lib PrimeReact</p>
    </Container>
  )
}

export default Home
