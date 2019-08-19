import * as React from "react";
import images from "src/styles/images";
import styled from "styled-components";

function ArtistCard(): JSX.Element {
  return (
    <CardContainer>
      <Image src={images.artists.placeholder} />
      <CardContent>
        <StyleContainer>Club</StyleContainer>
        <Name>Name</Name>
        <Rating>Rating</Rating>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: grid;
  height: 350px;
  width: 255px;
  margin-bottom: 64px;
  grid-template-columns: 255px;
  grid-template-rows: 225px 125px;
  border-style: solid;
  border-radius: 12px;
  border-width: 1px;
  border-color: lightgray;
  grid-template-areas:
    "image"
    "content";
`;

const Image = styled.img`
  grid-area: image;
`;

const CardContent = styled.div`
  display: grid;
  padding: 0px 24px 0px 24px;
  grid-template-rows: 20px 20px 20px 20px 20px 20px;
  grid-template-areas:
    "..."
    "style"
    "..."
    "name"
    "rating"
    "...";
`;

const StyleContainer = styled.div`
  grid-area: style;
  justify-content: "flex-start";
  align-content: "center";
  text-align: "center";
`;

const Rating = styled.div`
  grid-area: rating;
  justify-content: "flex-start";
  align-content: "center";
  text-align: "center";
`;

const Name = styled.div`
  grid-area: name;
  justify-content: "flex-start";
  align-content: "center";
  text-align: "center";
`;

export default ArtistCard;
