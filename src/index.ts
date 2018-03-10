import * as React from "react";
import * as rdom from "react-dom";
import {Provider, ProviderProps} from "react-redux";
import MainWindow from "./ui";
import State from "./state";

rdom.render(React.createElement(Provider, {store: State as any},
    React.createElement(MainWindow)),
    document.getElementById("app"));
// rdom.render(React.createElement(MainWindow), document.getElementById("app"));
