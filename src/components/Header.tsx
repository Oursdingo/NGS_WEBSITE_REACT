

function Header(){


    return (
        <nav className="navigation">

        <div className="logo-section">
        <i className="fa-solid fa-face-smile"></i>
         <h2> Aïobi</h2>
        </div>

         
          <ul className="navigation-links">
            <li className="navigation-item"><a href="#">Vision</a></li>
            <li className="navigation-item"><a href="#">Expertise</a></li>
            <li className="navigation-item"><a href="#">Secteurs</a></li>
            <li className="navigation-item"><a href="#">Ecosystème</a></li>
            <li className="navigation-item"><a href="#">Presse</a></li>
            <li className="navigation-item"><a href="#">Contact</a></li>
          </ul>  
        
         <div className="navigation-btn">
            <button>Commencer</button>
        </div>
        </nav>
    );
}

export default Header;