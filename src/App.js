import React from "react";
import GlobalStyle from "./theme/globalStyles";

import Clock from "./components/clock";
import Widgets from "./containers/widgets";
import styled from "styled-components";

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Clock />
      <Widgets />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  @media screen and (max-width: 701px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 701px) {
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-areas:
      "actrl clock astatus"
      "widgets widgets widgets";
  }
`;
