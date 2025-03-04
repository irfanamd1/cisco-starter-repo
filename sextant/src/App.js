import "./App.css";
import Banner from "./Banner/Banner";
import Exhibit from "./Exhibit/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="I'm an exhibit!">
        <p>Hello Sextant</p>
      </Exhibit>
    </div>
  );
}

export default App;
