import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/styles/global.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { Releases } from "./components/Releases";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Releases />
        <Switch>
          <div className="content">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
          </div>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
