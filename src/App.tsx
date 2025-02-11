import "./App.css";
import Form from "./assets/components/Form";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import bottomLinesSVG from "/src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <img
        src={bottomLinesSVG}
        alt="bottom line svg"
        className="bottom-line-svg"
        width={240}
      />
    </>
  );
}

export default App;
