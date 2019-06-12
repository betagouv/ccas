import React, {useCallback} from 'react'
import AsyncSelect from 'react-select/async'
import fetch from 'isomorphic-unfetch'

function CommuneInput({ value, onChange }) {
  const submitOnChange = useCallback(value => onChange(value))

  const getOptions = input => {
    if (input.length < 2) { return [] }

    return fetch(`https://geo.api.gouv.fr/communes?nom=${input}&fields=nom,code,departement,region&boost=population`)
      .then(response => response.json())
  }

  return (
    <div className="form__group">
        <label htmlFor="commune">Nom de la commune</label>
        <AsyncSelect
        onChange={submitOnChange}
        placeholder="Béaupréau-en-Mauges"
        getOptionLabel={({ nom, departement }) => nom + ` (${departement && departement.nom})`}
        loadOptions={getOptions}
        />
    </div>
  )
}

export default CommuneInput
