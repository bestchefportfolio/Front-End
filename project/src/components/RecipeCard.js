import React from "react";
import { Card, CardTitle, CardText, CardImg } from "reactstrap";
import styled from "styled-components";


const Rcard = styled(Card)`
  width: 40%;
  margin: 0 auto;
  margin-bottom: 2%;
`;

const CardHeader = styled(CardTitle)`
  font-size: 1.6rem;
`;

const RcardText = styled(CardText)`
  padding: 2% 0;
`;

export default function RecipeCard(props) {
  return (
    <div>
      <Rcard outline color="warning">
        <CardHeader className="card-header">{props.title}</CardHeader>
        <CardImg
          src={props.images || props.randomImage}
          top
          width="100%"
          alt={props.title}
        ></CardImg>
        <RcardText>{props.instructions}</RcardText>
        
      </Rcard>
    </div>
  );
}
