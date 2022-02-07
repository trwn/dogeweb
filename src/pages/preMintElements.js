import styled from "styled-components";

export const MintBox = styled.div`

  width: 100%;
  max-height: 400px;
  background-color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 130px;

  

`;
export const Button = styled.button`
  background-color: #de9e45;
  padding: 15px;
  border: none;
  border-radius: 12px;
  min-width: 250px;
  color: black;
  font-size: 18px;
  cursor: pointer;
  
`;

export const PreContainer = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: relative;
  z-index: 1;
  background: black;
  object-fit: cover;
`;

export const PreBg = styled.div`
  position: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #b17e37;
`;

export const PreContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background: black;
`;

export const PreLogo = styled.img`
  display: flex;
  height: 75px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background: #b17e37;
`;

export const MintDiv = styled.div`
  background: black;
  height: 400px;
  padding-top: 50px;
`;

export const PreAbout = styled.div`
  height: 420px;
  background: grey;
`;
