import "./App.css";
import { ethers } from "ethers";
import Ballot from "./artifacts/contracts/Ballot.sol/Ballot.json";

const ballotAdress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  async function requestAccount() {
    //connect to the metamask wallet of a user
    //request the account info
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>DAPP VOTTING APPLICATION</h2>
        <h6>Contract Address: {ballotAdress}</h6>
      </header>
    </div>
  );
}

export default App;
