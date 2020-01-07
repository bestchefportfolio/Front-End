import React from "react";
import { Card, CardHeader, CardText, CardImg } from "reactstrap";
import styled from "styled-components";

const Rcard = styled(Card)`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2%;
`;

export default function RecipeCard(props) {
  console.log(props.images);
  return (
    <div>
      <Rcard body className="text-center" outline color="warning">
        <CardHeader className="card-header">{props.title}</CardHeader>
        <CardImg
          src={props.images}
          top
          width="100%"
          alt={props.title}
        ></CardImg>
        <CardText>{props.instructions}</CardText>
      </Rcard>
    </div>
  );
}
