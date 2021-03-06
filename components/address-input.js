import React, {useCallback} from 'react'
import AsyncSelect from 'react-select/async'
import fetch from 'isomorphic-unfetch'

function AddressInput({ citycode, value, onChange }) {
  const submitOnChange = useCallback(value => onChange(value))

  const getOptions = input => {
    if (input.length < 2) { return [] }

    return fetch('https://api-adresse.data.gouv.fr/search/?' + (citycode ? 'citycode=' + citycode  + '&' : '') + 'q=' + encodeURIComponent(event.target.value))
      .then(response => response.json())
      .then(payload => payload.features)
  }

  return (
    <div className="form__group">
        <AsyncSelect
        onChange={submitOnChange}
        placeholder="6 Allée des rosiers"
        getOptionLabel={({ properties }) => properties.label}
        loadOptions={getOptions}
        />
    </div>
  )
}

export default AddressInput
