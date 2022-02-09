import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Preview from "../../components/Preview";
import { PreBg, PreLogo, MintDiv, GIF } from "./comingSoonElements";
import logo from "../../images/logo.png";
import gif from "../../images/gif.mp4";

const ComingSoon = () => {
  return (
    <>
      <PreBg>
        <PreLogo src={logo}></PreLogo>
      </PreBg>
      <MintDiv>
        <GIF autoPlay loop muted src={gif}></GIF>
      </MintDiv>
      <Footer />
    </>
  );
};

export default ComingSoon;
