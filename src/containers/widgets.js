import React from "react";
import styled from "styled-components";
import Card from "../components/card";

const Widgets = () => {
  return (
    <WidgetContainer>
      <Card heading="Brána celá" icon="dungeon" />
      <Card heading="Brána chodec" icon="walking" />
      <Card heading="Terasa" icon="bulb" />
    </WidgetContainer>
  );
};

const WidgetContainer = styled.div`
  grid-area: widgets;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Widgets;
