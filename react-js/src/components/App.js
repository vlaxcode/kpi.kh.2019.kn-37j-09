import React from "react";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { RouterContainer, WrapperContainer} from "../containers";

const App = () => (

  <BrowserRouter>
    <WrapperContainer>
        <RouterContainer />
    </WrapperContainer>
  </BrowserRouter>
);

export default App;
