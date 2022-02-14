import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import contract from "../../contracts/dogeVerse.json";
import grid from "../../images/grid.png";

import {
  HeroContainer,
  HeroContent,
  Grid,
  MintDiv,
  MiniAbout,
  MintInput,
  Price,
  Minted,
  Button,
  MyNFT,
  First,
  Then,
  Plus,
  Input,
  Minus,
  Mint,
  PriceText,
  MintCText,
  PriceText2,
  MintCText2,
} from "./HeroElements";

const contractAddress = "0x4E010E3C8e7E7aA3FD7c41854d43a12f456c4818";
const abi = contract.abi;

const HeroSection = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [amount, setAmount] = useState(1);
  const [supply, setSupply] = useState("0");
  const [walletBalance, setWalletBalance] = useState("0");
  const [connected, setConnected] = useState("Connect Wallet");
  const [feedback, setFeedback] = useState("");

  const incrementCount = () => {
    if (amount <= 14) {
      setAmount(amount + 1);
    }
  };

  const decrementCount = () => {
    if (amount >= 2) {
      setAmount(amount - 1);
    }
  };

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

  const mintNft = async (_amount) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let ethAmount = (0.05 * _amount).toString();

        const mintNft = await nftContract.mint(_amount, {
          value: ethers.utils.parseEther(ethAmount),
        });
        setFeedback("Minting your NFT!!!");
        await mintNft.wait();
        setFeedback("Finished! Check it out on Opensea!");
      } else {
        console.log("Ethereum object does not exist!");
      }
    } catch (err) {
      setFeedback("Not enough ETH!");
    }
  };

  const connectWalletButton = () => {
    return (
      <Button onClick={connect} className="cta-button connect-wallet-button">
        Connect Wallet
      </Button>
    );
  };

  const mintNftButton = () => {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault();
          mintNft(amount);
        }}
      >
        Mint
      </Button>
    );
  };

  const supplyLeft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const nftContract = new ethers.Contract(contractAddress, abi, provider);
        const bigNumber = await nftContract.totalSupply();

        setSupply(bigNumber.toString());
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      return;
    }
  };

  const balance = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        const bigNumber = await nftContract.balanceOf(currentAccount);

        setWalletBalance(bigNumber.toString());
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    supplyLeft();
    balance();
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <Grid src={grid}></Grid>
        <MintDiv>
          <MiniAbout>
            DogeVerse is a collection of 8888 //something cool// about this long
            or so i guess
          </MiniAbout>
          <First>First 800 FREE (max. 1 NFT / tx.)</First>
          <Then>Then 0.05Ξ each (max 15 NFT / tx.)</Then>
          <Minted>
            <MintCText>Minted</MintCText>
            <MintCText2>{supply}/8888</MintCText2>
          </Minted>
          <Price>
            <PriceText>Price</PriceText>
            <PriceText2>0.05Ξ</PriceText2>
          </Price>
          <Mint>
            <MintInput>
              <Minus onClick={decrementCount}>-</Minus>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Plus onClick={incrementCount}>+</Plus>
            </MintInput>
            <Button>
              {currentAccount ? mintNftButton() : connectWalletButton()}
            </Button>
          </Mint>
          <MyNFT>My total NFT minted {walletBalance}</MyNFT>
        </MintDiv>
      </HeroContent>
    </HeroContainer>
  );
};
export default HeroSection;
