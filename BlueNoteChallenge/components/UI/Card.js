import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Item>
      <Text>{props.type}</Text>
    </Item>
  );
};

export default Card;

const Item = styled.View`
  background: #294c9b;
  height: 100px;
  width: 350px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
  margin: 10px 8px;
`;
const Text = styled.Text`
  font-size: 35px;
  font-weight: bold;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: white;
`;
