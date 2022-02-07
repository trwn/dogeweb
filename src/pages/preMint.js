import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import contract from "../contracts/dogeVerse.json";
import Footer from "../components/Footer";
import Preview from "../components/Preview";
import {
  PreBg,
  PreContainer,
  PreLogo,
  Button,
  MintBox,
  MintDiv,
  PreAbout,
} from './preMintElements'
import logo from "../images/logo.png";

const contractAddress = "0x634a5A9cE5D9718a229fC66A024F0C16Fe5B99fb";
const abi = contract.abi;

const PreMint = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const connect = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Metamask is isntalled! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("no authorized accounts");
    }
  };

  const mintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.mint(1, {
          value: ethers.utils.parseEther("0.00"),
        });

        console.log("Mining... please wait");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return <Button onClick={connect}>Connect Wallet</Button>;
  };

  const mintNftButton = () => {
    return <Button onClick={mintNft}>Mint</Button>;
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
    <PreBg>
      <PreLogo src={logo}></PreLogo>
    </PreBg>
    <MintDiv>
    <MintBox>
      <Button>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </Button>
    </MintBox>
    </MintDiv>
    <Preview/>
    <Footer/>
    </>
  );
};

export default PreMint;
