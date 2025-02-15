import logo from "../images/logo-mark.svg";
import squigglyLine from "../images/pattern-squiggly-line-top.svg";

const Header = () => {
  return (
    <section className="header-container">
      <img
        src={squigglyLine}
        className="header-squiggly-line"
        alt="squiggly line"
      />
      <img src={logo} alt="Conference Logo" width={24} height={24} />
      <h2>Coding Conf</h2>
    </section>
  );
};

export default Header;
