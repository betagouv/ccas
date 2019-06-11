import React, {useState, useCallback} from 'react'
import fetch from 'isomorphic-unfetch'

function AddressInput({ id, value, citycode, onChange }) {
  const [rawValue, setValue] = useState(value)
  const [candidates, setCandidates] = useState([])

  const handleChange = useCallback(async event => {
    setValue(event.target.value)

    const uri = 'https://api-adresse.data.gouv.fr/search/?' + (citycode ? 'citycode=' + citycode  + '&' : '') + 'q=' + encodeURIComponent(event.target.value)
    const res = await fetch(uri)
    const json = await res.json()
    setCandidates(json.features)
  })

  const handleClick = useCallback(value => {
    onChange(value)
    setValue(value.properties.label)
    setCandidates([])
  })

  return (
    <div>
      <style jsx>{`
        a {
          display: block;
        }
      `}</style>
      <input id={id} value={rawValue} onChange={handleChange}></input>
      {
        candidates.map(c => {
          return <a onClick={() => handleClick(c)} key={c.properties.id}>{c.properties.name}</a>
        })
      }
    </div>
  )
}

export default AddressInput
