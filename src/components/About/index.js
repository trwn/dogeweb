import React from "react";
import {
  InfoContrainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
} from "./AboutElements";

const about = () => {
  return (
    <>
      <InfoContrainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>DogeVerse</Heading>
                <Subtitle>
                  make a paragraph or sum about the comic (maybe hold = free
                  digital comic and free physical to first 2000)
                  <br></br>
                  <br></br>
                  also donate some amount to dog charity
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContrainer>
    </>
  );
};

export default about;
