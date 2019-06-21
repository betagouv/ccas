import React, {useState, useCallback} from 'react'
import AddressInput from './address-input'
import HorairesInput from './horaires-input'

import yaml from 'js-yaml'

function CCASForm({ commune, onReset }) {
  const [adresse, setAdresse] = useState()
  const [telephone, setTelephone] = useState('')
  const [url, setUrl] = useState('')

  const defaultHoraires = {
    du: 'lundi',
    au: 'vendredi',
    heures: [{
      de: '8h',
      a: '12h'
    }, {
      de: '14h',
      a: '17h'
    }]
  }
  const [horaires, setHoraires] = useState([defaultHoraires])

  const [helpMessage, setHelpMessage] = useState('')

  const [result, setResult] = useState()
  const [sending, setSending] = useState()

  const save = useCallback(() => {
    setHelpMessage('')
    if (!commune) {
      setHelpMessage('Vous devez sélectionner une commune.')
      return
    }

    if (!adresse) {
      setHelpMessage('Vous devez indiquer une adresse pour le CCAS.')
      return
    }

    if (!telephone) {
      setHelpMessage('Vous devez indiquer un numéro de téléphone pour le CCAS.')
      return
    }

    const data = {
      nom: `Centre Communal d'Action Sociale de la ville de ${commune.nom}`,
      pivotLocal: 'ccas',
      id: `ccas_${commune.nom}`,
      adresses: [{
        id: adresse.properties.id,
        lignes: [adresse.properties.name],
        codePostal: adresse.properties.postcode,
        commune: commune.nom,
        type: 'physique',
      }],
      telephone: telephone,
      'accueil physique': {
        horaires: horaires
      },
      zonage: {
        communes: [
          `${commune.code} ${commune.nom}`
        ]
      }
    }

    if (url) {
      data.url = url
    }

    const body = {
      title: `Ajout des informations du CCAS de ${commune.nom}`,
      body: "Fichier généré à partir de l'outil de contribution simplifiée",
      content: yaml.safeDump(data),
      path: `data/${commune.departement.code}/${data.id}.yaml`,
      branch: `mon_ccas_${commune.code}`
    }

    setSending(true)
    fetch('https://ludwig.incubateur.net/api/repository/github/betagouv/annuaire-api/suggest',
      {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(payload => setResult({status: 'ok', payload}))
      .catch(error => setResult({status: 'ko', error}))
      .finally(() => {
        setSending(false)
      })
  })

  return (
    <div>
      <div className="form__group">
          <label htmlFor="adresse">🏡 Adresse du CCAS</label>
          <AddressInput id="adresse" citycode={commune.code} value={adresse} onChange={setAdresse} />
      </div>
      <div className="form__group">
          <label htmlFor="telephone">📠 Numéro de téléphone du CCAS</label>
          <input id="telephone" placeholder="02 40 12 23 34" type="tel" value={telephone} onChange={event => setTelephone(event.target.value)} />
      </div>
      <div className="form__group">
          <label htmlFor="url">🌍 Page internet avec les informations du CCAS</label>
          <input id="url" type="tel" value={url} onChange={event => setUrl(event.target.value)} />
      </div>
      <div className="form__group">
          <label htmlFor="horaires">📅 Horaires d'ouverture du CCAS</label>
          <HorairesInput value={horaires} onChange={setHoraires} />
      </div>
      <div className="form__group">
        { helpMessage && <div className="notification error">🚧 {helpMessage}</div> }
        <button
          className={ `button large ${sending ? 'secondary' : ''}` }
          disabled={sending}
          onClick={save}
          >{ sending ? 'Enregistrement en cours…' : 'Enregistrer' }
        </button>
      </div>

      { result && result.status && (
        <div className="form__group">
          {(
            result.status === 'ok' && (
              <div className="notification success">
                Merci beaucoup ! Votre contribution est accessible à la <a href={result.payload.data.html_url}>page suivante</a>.
                Vous pouvez vérifier les informations d'un CCAS d'une <a onClick={onReset}>autre commune</a>.
              </div>
            ) || (
              <div className="notification error">
                Une erreur a eu lieu. Merci de nous contacter par email à <a href="mailto:bonjour@mes-aides.gouv.fr?subject=Ajout de CCAS impossible">bonjour@mes-aides.gouv.fr</a>.
              </div>
            )
          )}
        </div>)
      }
    </div>
  )
}

export default CCASForm
