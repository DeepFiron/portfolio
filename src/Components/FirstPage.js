import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./FirstPage.css";

import SideNav from "./SideNav";
import About from "./About";
import Portfolio from "./Portfolio";
import Workflow from "./Workflow";
import Principles from "./Principles";
import Contact from "./Contact";
import FormRead from "./CRUD/FormRead";
import FormUpdate from "./CRUD/FormUpdate";

function FirstPage() {
  return (
    <div className="justify-center flex flex-col lg:w-10/12 my-0 mx-auto">
      <div className="m-0 p-0 flex flex-col lg:flex-row justify-center">
        <BrowserRouter>
          <SideNav />
          <div className="rounded-tr-2xl p-2 text-white main relative content">
            <Switch>
              <Route path="/" component={About} exact />
              <Route path="/portfolio" component={Portfolio} />
              {/* <Route path="/workflow" component={Workflow} />
              <Route path="/principles" component={Principles} /> */}
              <Route path="/contact" component={Contact} />
              <Route path="/read" component={FormRead} />
              <Route path="/update" component={FormUpdate} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      <footer className="rounded-b-2xl p-4 box-border footer" />
    </div>
  );
}

export default FirstPage;
