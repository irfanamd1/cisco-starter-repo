import Address from "./Address/Address";
import "./App.css";
import Banner from "./Banner/Banner";
import Exhibit from "./Exhibit/Exhibit";
import Pylon from "./PylonConnector/Pylon";

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
      <Exhibit name="Pylon Packet Latency">
        <Pylon />
      </Exhibit>
    </div>
  );
}

export default App;
