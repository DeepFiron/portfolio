import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./FirstPage.css";

import SideNav from "./SideNav";
import About from "./About";
import Portfolio from "./Portfolio";
import Workflow from "./Workflow";
import Principles from "./Principles";
import Contact from "./Contact";

function FirstPage() {
  return (
    <div class="justify-center flex flex-col w-10/12 -my-0 mx-auto">
      <div class="m-0 p-0 flex justify-center">
        <BrowserRouter>
          <SideNav />
          <div className="rounded-tr-2xl p-2 text-white main relative">
            <Switch>
              <Route path="/" component={About} exact />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/workflow" component={Workflow} />
              <Route path="/principles" component={Principles} />
              <Route path="/contact" component={Contact} />
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
