import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <div class="hero" role="banner">
        <div class="hero__container">
          <h1 class="hero__white-background">CCAS</h1>
          <p class="hero__white-background">Ajouter et modifier en quelques clics les informations de votre CCAS</p>
        </div>
      </div>

      <section class="section section-white" id="typography">
        <div class="container">
          <h2>Vérifier les informations de votre CCAS</h2>
        </div>
      </section>

      <section class="section section-white" id="typography">
        <div class="container">
          <h2>Ajouter votre CCAS à l'annuaire</h2>
        </div>
      </section>
    </Layout>
  )
}
