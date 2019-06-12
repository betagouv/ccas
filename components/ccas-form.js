import React, {useState, useCallback} from 'react'
import AddressInput from './address-input'


function HoraireInput({ value, index, onChange }) {
  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  return (
    <div>
      Du
      <select>
        { days.map((d,i) => <option value={d} key={i}>{d}</option>)}
      </select>
      au
      <select>
        { days.map((d,i) => <option value={d} key={i}>{d}</option>)}
      </select>
      {value.du} au {value.au} { value.heures.map((h,i) => <span key={i} >de {h.de} à {h.a}, </span>)}
    </div>
  ) 
}

function CCASForm({ commune }) {
  const [adresse, setAdresse] = useState()
  const [telephone, setTelephone] = useState('')
  const [url, setUrl] = useState('')

  const handleAdresseChange = useCallback(value => {
    setAdresse(value)
  })

  const handleTelephoneChange = useCallback(event => {
    setTelephone(event.target.value)
  })

  const handleURLChange = useCallback(event => {
    setUrl(event.target.value)
  })

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
  const handleAddOpeningHours = event => {
    let newHoraires = [].concat(horaires)
    newHoraires.push(defaultHoraires)
    setHoraires(newHoraires)
  }

  const handleUpdateOpeningHours = ({index, value}) => {
    let newHoraires = [].concat(horaires)
    newHoraires[index] = value
    setHoraires(newHoraires)
  }

  return (
    <div>
      <div className="form__group">
          <label htmlFor="adresse">Adresse du CCAS</label>
          <AddressInput id="adresse" citycode={commune.code} value={adresse} onChange={handleAdresseChange} />
      </div>
      <div className="form__group">
          <label htmlFor="telephone">Numéro de téléphone du CCAS</label>
          <input id="telephone" type="tel" value={telephone} onChange={handleTelephoneChange} />
      </div>
      <div className="form__group">
          <label htmlFor="url">URL vers les informations du CCAS</label>
          <input id="url" type="tel" value={url} onChange={handleURLChange} />
      </div>
      <div className="form__group">
          <label htmlFor="horaires">Horaires d'ouverture du CCAS</label>
          {
            horaires.map((h,i) => <HoraireInput value={h} key={i} />)
          }
          <button onClick={handleAddOpeningHours}>Ajouter une plage de jour</button>
      </div>
    </div>
  )
}

export default CCASForm
