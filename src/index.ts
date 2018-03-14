import * as React from "react";
import * as rdom from "react-dom";
import {Provider, ProviderProps} from "react-redux";
import MainWindow from "./ui";
import State, {StateShape} from "./state";
import Core from "./core";

const core = new Core((success: boolean) => State.dispatch((state: StateShape) => ({...state, ajaxArrived: true})));

rdom.render(React.createElement(Provider, {store: State as any},
    React.createElement(MainWindow, {currentMailbox: "inbox", core: core} as any)),
    document.getElementById("app"));
// rdom.render(React.createElement(MainWindow), document.getElementById("app"));
(window as any).store = State;
