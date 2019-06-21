import React, {useState, useCallback} from 'react'


function HeureInput({value, value: {de, a}, onChange}) {
  const handleDeChange = useCallback(event => {
    if (!onChange) {
      return
    }

    onChange(Object.assign({}, value, { de: event.target.value }))
  })

  const handleAChange = useCallback(event => {
    if (!onChange) {
      return
    }

    onChange(Object.assign({}, value, { a: event.target.value }))
  })

  let options = []
  for (var h = 7; h <= 20; h++) {
    for (var m = 0; m <60; m += 15) {
       options.push(h.toString() + 'h' + (m ? m.toString(): ''))
    }
  }

  return (
      <div>
      de
      <select onChange={handleDeChange} defaultValue={de}>
        { options.map((t,i) => <option value={t} key={i}>{t}</option>)}
      </select>
      à
      <select onChange={handleAChange} defaultValue={a}>
        { options.map((t,i) => <option value={t} key={i}>{t}</option>)}
      </select>
      </div>
    )
}


function HeuresInput({value, onChange}) {
  const handleAddition = useCallback(() => {
    if (!onChange) {
      return
    }
    const newArray = [].concat(value)
    newArray.push({
      de: '8h',
      a: '17h'
    })
    onChange(newArray)
  })

  const handleChange = useCallback((newValue, index) => {
    if (!onChange) {
      return
    }

    const newArray = [].concat(value)
    newArray[index] = newValue
    onChange(newArray)
  })

  const handleDeletion = useCallback((index) => {
    if (!onChange) {
      return
    }

    const newArray = [].concat(value)
    newArray.splice(index, 1)
    onChange(newArray)
  })

  function heureKey(h,i) {
    return `${i}_${h.de}_${h.a}`
  }

  return (
      <div style={{
        paddingLeft: '2em',
      }}>
        { value.map((h,i) => {
          return (
            <div key={heureKey(h,i)} style={{
              padding: '.5em'
            }}>
              <HeureInput onChange={value => handleChange(value, i)} value={h} />
              { value.length > 1 && <button className="button-outline warning small" onClick={e => handleDeletion(i)}>Supprimer cette plage horaire</button> }
            </div>
          )}
        )}
        <button className="button-outline primary" onClick={handleAddition}>Ajouter une plage horaire</button>
      </div>
    )
}

function HoraireInput({ value, value: {du, au, heures}, onChange }) {
  const handleChange = useCallback((newValue, prop) => {
    if (!onChange) {
      return
    }

    onChange(Object.assign({}, value, { [prop]: newValue }))
  })

  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
  return (
    <div>
      Du
      <select onChange={e => handleChange(e.target.value, 'du')} defaultValue={du}>
        { days.map((d,i) => <option value={d} key={i}>{d}</option>)}
      </select>
      au
      <select onChange={e => handleChange(e.target.value, 'au')} defaultValue={au}>
        { days.map((d,i) => <option value={d} key={i}>{d}</option>)}
      </select>
      <HeuresInput onChange={v => handleChange(v, 'heures')} value={heures} />
    </div>
  ) 
}

function HorairesInput({value, onChange}) {
  const handleAddition = useCallback(() => {
    if (!onChange) {
      return
    }
    const newArray = [].concat(value)
    newArray.push({
      du: 'lundi',
      au: 'vendredi',
      heures: [{ de: '8h', a: '17h' }]
    })
    onChange(newArray)
  })

  const handleChange = useCallback((newValue, index) => {
    if (!onChange) {
      return
    }

    const newArray = [].concat(value)
    newArray[index] = newValue
    onChange(newArray)
  })

  const handleDeletion = useCallback((index) => {
    if (!onChange) {
      return
    }

    const newArray = [].concat(value)
    newArray.splice(index, 1)
    onChange(newArray)
  })

  function jourKey(h,i) {
    return `${i}_${h.de}_${h.a}`
  }

  return (
      <div style={{
        paddingLeft: '2em',
      }}>
        { value.map((h,i) => {
          return (
            <div className="form__group" key={jourKey(h,i)}>
              <HoraireInput onChange={value => handleChange(value, i)} value={h} />
              { (value.length > 1) && <button className="button-outline warning small" onClick={e => handleDeletion(i)}>Supprimer cette plage de jours</button> }
            </div>
          )}
        )}
        <button className="form__group button-outline primary" onClick={handleAddition}>Ajouter une plage de jours</button>
      </div>
    )
}

export default HorairesInput
