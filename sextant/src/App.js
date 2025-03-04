import Address from "./Address/Address";
import "./App.css";
import Banner from "./Banner/Banner";
import Exhibit from "./Exhibit/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="Public IPv4 Address">
        <Address url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <Address url="https://api64.ipify.org?format=json" />
      </Exhibit>
    </div>
  );
}

export default App;
