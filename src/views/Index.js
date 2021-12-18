import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

  // mainnet 
  // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
  // testnet
  // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
function getLibrary(provider) {
  console.log(new Web3(provider));
  return new Web3(provider);
}

function Index({pageProps}) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <IndexNavbar {...pageProps} />
      </Web3ReactProvider>
      {/* <IndexNavbar /> */}
      <IndexHeader />
      <div className="main">
      </div>
    </>
  );
}

export default Index;
