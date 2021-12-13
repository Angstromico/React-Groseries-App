import { links, social } from './data';
import logo from './logo.svg';

const FooterNav = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="nav-center">
          <ul className="social-icons">
            {social.map((networks) => {
              const { id, url, icon } = networks;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>

          <div className="links-container">
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default FooterNav;
