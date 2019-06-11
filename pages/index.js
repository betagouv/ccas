import {useState} from 'react'

import Layout from '../components/Layout'
import CommuneSearch from '../components/commune-search'
import CCASForm from '../components/ccas-form'


import yaml from 'js-yaml'

export default function Index() {

  const [nom, setNom] = useState()

  return (
    <Layout>
      <div className="hero" role="banner">
        <div className="hero__container">
          <h1 className="hero__white-background">CCAS</h1>
          <p className="hero__white-background">Ajouter en quelques clics les informations de votre CCAS</p>
        </div>
      </div>

      <section className="section section-white" id="typography">
        <div className="container">
          <h2>Vérifier les informations de votre CCAS</h2>
          <CommuneSearch />
          <h3>{ nom }</h3>

        </div>
      </section>

      <section className="section section-white" id="typography">
        <div className="container">
          <h2>Créez une fiche pour votre CCAS</h2>
          <CCASForm commune={{ nom: 'Canéjan', code: '33090' }}/>
        </div>
      </section>



      <section>
        <pre>
        { yaml.safeDump({ok: 'test'}) }
        </pre>
      </section>
    </Layout>
  )
}
