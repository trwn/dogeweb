import styled from "styled-components";

export const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1100px;
  background: black;
`;

export const Container = styled.div`
  position: absolute;
`;

export const Wrap = styled.div`
  height: 100%;
  background: #282828;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 10px;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  width: 750px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  background: #3b3b3b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 1rem;
    font-size: 2rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  text-shadow: -2px 3px black;
  text-align: center;
`;
