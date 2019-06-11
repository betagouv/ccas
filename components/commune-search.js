import React, {useState, useCallback} from 'react'

function CommuneSearch() {
  const [nom, setNom] = useState()
  const [commune, setCommune] = useState()
  const [candidates, setCandidates] = useState([])

  const handleChange = useCallback(event => {
    setNom(event.target.value)
  })

  const handleSubmit = useCallback(event => {
    event.preventDefault()

    setCandidates([{
      nom: 'Canéjan',
      code: '33012',
    },{
      nom: 'Cestas',
      code: '33013',
    },{
      nom: 'Lyon',
      code: '33014',
    },{
      nom: 'Bordeaux',
      code: '33015',
    }])
  })

  const selectCommune = useCallback(commune => {
    setCommune(commune);
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
            <label htmlFor="commune">Nom de la commune {nom}</label>
            <input id="commune" value={nom} onChange={handleChange}></input>
        </div>
        <button className="button large">Rechercher</button>
      </form>

      <div className="form__group"> 
          <p>Liste des communes</p>
          {
            candidates.map(c => {
              return <div key={c.code}><a onClick={() => selectCommune(c)}>{c.nom}</a></div>
            })
          }
      </div>
    </div>
  )
}

export default CommuneSearch
