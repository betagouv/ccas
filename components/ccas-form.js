import React, {useState, useCallback} from 'react'
import AddressInput from './address-input'


function HoraireInput({ value }) {
  return (
    <p>Du {value.du} au {value.au} { value.heures.map(h => <span>de {h.de} à {h.a}, </span>)}
    </p>
  ) 
}

function CCASForm({ commune }) {
  const [adresse, setAdresse] = useState()
  const [telephone, setTelephone] = useState('')

  const handleAdresseChange = useCallback(value => {
    setAdresse(value)
  })

  const handleTelephoneChange = useCallback(event => {
    setTelephone(event.target.value)
  })

  const [horaires, setHoraires] = useState([{
    du: 'lundi',
    au: 'vendredi',
    heures: [{
      de: '8h',
      a: '12h'
    }, {
      de: '14h',
      a: '17h'
    }]
  }])

  return (
    <div>
      <div className="form__group">
          <label htmlFor="adresse">Adresse de votre CCAS</label>
          <AddressInput id="adresse" citycode={commune.code} value={adresse} onChange={handleAdresseChange} />
      </div>
      <div className="form__group">
          <label htmlFor="telephone">Numéro de téléphone de votre CCAS</label>
          <input id="telephone" type="tel" value={telephone} onChange={handleTelephoneChange} />
      </div>
      <div className="form__group">
          <label htmlFor="horaires">Horaires d'ouverture de votre CCAS</label>
          {
            horaires.map(h => <HoraireInput value={h} />)
          }
      </div>
    </div>
  )
}

export default CCASForm
