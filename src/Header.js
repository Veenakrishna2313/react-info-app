import logo from './logo.png'
 function Header() {
  return (
    <header>
      <nav className="header-items">
        <img className="nav-image" src={logo}/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;