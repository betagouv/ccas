function CCASView({ ccas }) {
  const props = ccas.properties
  const adresse = props.adresses[0]

  return (
    <div>
      <div>
        <p>Il est situé à l'adresse&nbsp;:</p>
        <div>
          {adresse.lignes.map((l, i) => <div key={i}>{l}</div>)}
          { adresse.codePostal } { adresse.commune }
        </div>
      </div>
      <div>
        <p>Il est ouvert&nbsp;:</p>
        <ul>{props.horaires.map((h, i) => (
          <li key={i}>du {h.du} au {h.au}&nbsp; { h.heures.map((h,i) => <span key={i} >de {h.de} à {h.a}</span>) }</li>))}</ul>
      </div>
    </div>
  )
}

export default CCASView
