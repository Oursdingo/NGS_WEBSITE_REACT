import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        {/* Votre contenu principal ira ici */}
        <h1>Contenu principal</h1>
        <p>Le contenu de votre application sera placé ici.</p>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="box footer-logo">
              <h2 className="footer-title">Aiobi</h2>
              {/* <img src="" alt="logo de Aiobi" /> */}
              <p>
                Première DeepTech d'Afrique de l'Ouest spécialisée dans
                l'intelligence artificielle d'entreprise.
              </p>
            </div>
            <div className="box footer-solution">
              <h2 className="footer-title">Solutions</h2>
              <ul>
                <li>Optimisation Opérationnelle</li>
                <li>Vision par Ordinateur</li>
                <li>Analyse Prédictive</li>
                <li>Analyse Comportementale</li>
              </ul>
            </div>
            <div className="box footer-contact">
              <h2 className="footer-title">Contact</h2>
              <p>
                Grand Bassam, VITIB Zone Franche Côte d'Ivoire
                contact@aiobi.world Espace Presse{" "}
                <span className="hackathon">Hackathon 2025</span>{" "}
              </p>
            </div>
          </div>
          <hr className="box-line" />
          <p className="copyright">
            © {new Date().getFullYear()} Aïobi - Filiale de BURVAL Corporate
            (Groupe BBS Holding). Tous droits réservés.
          </p>
          <nav></nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
