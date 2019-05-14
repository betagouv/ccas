import Link from 'next/link'
import Head from 'next/head'

import templateStyle from 'template.data.gouv.fr/dist/test.css'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="static/main.css"/>
      <style jsx global>{ templateStyle }</style>
    </Head>
    <header className="navbar">
      <div className="navbar__container">
        <Link href="/"><a className="navbar__home">CCAS</a></Link>
        <nav>
          <ul className="nav__links">
            <li className="nav__item">
              <Link href="/"><a>Accueil</a></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
)

export default Header
