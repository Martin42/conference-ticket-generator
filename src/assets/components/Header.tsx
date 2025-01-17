import logo from "../images/logo-mark.svg";
import squigglyLine from "../images/pattern-squiggly-line-top.svg";

const Header = () => {
  return (
    <section className="header-container">
      <img
        src={squigglyLine}
        className="header-asset"
        alt="squiggly line"
        width={100}
      />
      <img src={logo} alt="Conference Logo" width={24} height={24} />
      <h2>Coding Conf</h2>
    </section>
  );
};

export default Header;
