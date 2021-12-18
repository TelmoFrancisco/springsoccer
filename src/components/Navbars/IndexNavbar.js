import React, { useState, useEffect } from 'react';

// nodejs library that concatenates strings
import classnames from "classnames";

import { useWeb3React } from "@web3-react/core"
import { injected } from "../Connector/connector"
import { Web3 } from 'web3'

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const ERC20ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }];

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [tokenBalance, setTokenBalance] = useState(0);

  const { active, account, library, connector,  activate, deactivate } = useWeb3React()

  useEffect(() => {
    // Update the document title using the browser API
    const contract = getERC20Contract('0xf8b3c8d78b69483aadb5b1f27e54f3ee4c8a9e1e',library);
    contract?.methods
              .balanceOf(account)
              .call()
              .then((value) => {
                setTokenBalance(value);
              })
  },[active]);


  function getTokenBalance(){
   // var tokenContract = new library.eth.Contract(, '0x0cCC03dE96B6Ab56D473c23E46eBE3D89Ff4fab8', library);
   
  }

  function getERC20Contract(tokenAddress, web3) {
    return web3 ? new web3.eth.Contract(ERC20ABI, tokenAddress, {
      from: web3.eth.defaultAccount,
    })
    : null
  }
  
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Spring Soccer NFT
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/SEuphoriaPT"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="--"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://discord.gg/WCktt32s"
                target="_blank"
                title="Star on Discord"
              >
                <i className="fab fa-discord" />
                <p className="d-lg-none">Discord</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://app.gitbook.com/s/UGoX6E8peZbPzBwm9Y07/"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Whitepaper
              </NavLink>
            </NavItem>
            <NavItem>
              
              {active ? 
              <Button 
                onClick={disconnect} 
                className="btn-round"
                color="danger">
                $ {tokenBalance} - Disconnect - {account}
              </Button>
                          : 
              <Button
              className="btn-round"
              color="danger"
              href=""
              target="_blank"
              onClick={connect}
              disabled
            >
              <i className="nc-icon nc-spaceship"></i> Connect Wallet
            </Button>
              }
              
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
