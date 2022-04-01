import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ButtonAppBar from "./components/ButtonAppBar";
import Home from "./components/Home";
import Question from "./components/Question";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="question" element={<Question />} />
            <Route path="main" element={<Main />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
