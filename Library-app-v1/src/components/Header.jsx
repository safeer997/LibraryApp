import styles from './Header.module.css'
const Header = () => {
  return (
    <>
      <nav className={styles.navbarBackgroundColor}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Library App</span>
        </div>
      </nav>
    </>
  );
};
export default Header;
