import { useEffect, useState } from "react";
import axois from "axios";
import "./App.css";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axois
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinid" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
