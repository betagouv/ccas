import {useState, useCallback} from 'react'

import Layout from '../components/Layout'
import CommuneInput from '../components/commune-input'

import CCASForm from '../components/ccas-form'
import CCASView from '../components/ccas-view'
import fetch from 'isomorphic-unfetch'

import yaml from 'js-yaml'

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

  const handleSendPayload = useCallback(() => {
    const payload = {
      nom: `Centre Communal d'Action Sociale de la ville de ${commune.nom}`,
      pivotLocal: 'ccas',
      id: `ccas_${commune.nom}`,
      adresses: [{
        lignes: ['OK'],
        codePostal: 29200,
        commune: commune.nom,
        type: 'physique',
      }],
      url: 'URL',
      telephone: '02 98 03 39 52',
      'accueil physique': {
        horaires: [{
          du: 'lundi',
          au: 'vendredi',
          heures: [{
            de: '9h',
            a: '12h'
          }, {
            de: '13h30',
            a: '17h'
          }]
        }]
      },
      zonage: {
        communes: [
          `${commune.code} ${commune.nom}`
        ]
      }
    }
  })

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
          <CommuneInput value={commune} onChange={handleCommuneChange} />
        </div>
      </section>

      {commune && !fetchingCCAS && (
        (ccas &&
          <section className="section section-white" id="typography">
            <div className="container">
              <h2>La vile de {commune.nom} à un CCAS dans l'annuaire</h2>
              <CCASView ccas={ccas} />
            </div>
          </section>
          ) || 
          (
            <div>
              <section className="section section-white" id="typography">
                <div className="container">
                  <h2>{commune.nom} ne semble pas avoir de CCAS dans l'annuaire.</h2>
                  <h3>Ajoutez le&nbsp;!</h3>
                  <CCASForm commune={commune}/>
                </div>
              </section>
            </div>
          )
        )}
    </Layout>
  )
}
