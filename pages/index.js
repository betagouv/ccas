import {useState, useCallback} from 'react'

import Layout from '../components/Layout'
import CommuneInput from '../components/commune-input'

import CCASForm from '../components/ccas-form'
import CCASView from '../components/ccas-view'
import fetch from 'isomorphic-unfetch'

export default function Index() {
  const [commune, setCommune] = useState()
  const [ccas, setCCAS] = useState()

  const [fetchingCCAS, setFetchingCCAS] = useState(false)

  const handleCommuneChange = useCallback(async commune => {
    setCommune(commune);
    setFetchingCCAS(true);
    return fetch(`https://etablissements-publics.api.gouv.fr/v3/communes/${commune.code}/ccas`)
      .then(response => response.json())
      .then(response => response.features.length && response.features[0])
      .catch(() => null)
      .then(data => setCCAS(data))
      .finally(() => {
        setFetchingCCAS(false)
      })
  })

  return (
    <Layout>
      <div className="hero" role="banner">
        <div className="hero__container">
          <h1 className="hero__white-background">🏡 CCAS</h1>
          <p className="hero__white-background">Ajouter en quelques clics les informations de votre centre communal d'action sociale</p>
        </div>
      </div>

      <section className="section section-white" id="typography">
        <div className="container">
          <h2>🔍 Vérifier les informations de votre CCAS</h2>
          <CommuneInput value={commune} onChange={handleCommuneChange} />
        </div>
      </section>

      <section className="section section-white" id="typography">
        {commune && !fetchingCCAS && (
          (ccas &&
              <div className="container">
                <h2>⭐ La vile de {commune.nom} à un CCAS dans l'annuaire</h2>
                <CCASView ccas={ccas} />
              </div>
            ) ||
            (
              <div className="container">
                <h2>😟 {commune.nom} ne semble pas avoir de CCAS dans l'annuaire.</h2>
                <h3>📝 Ajoutez le&nbsp;!</h3>
                <CCASForm commune={commune} onReset={() => setCommune()}/>
              </div>
            )
          )}
      </section>
    </Layout>
  )
}
