import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import Game from "./components/game/game";
import Clock from "./components/dateTime/clock";
import Toggle from "./components/test/toggle";
import Calculator from "./components/temperature/calculator";
import SignUpDialog from "./components/dialog/signUpDialog";
import FilterableProductTable from "./components/productTable/filterableProductTable";
import { Products } from "./components/productTable/products";
import OuterClickExample from "./components/test/outerClickExample";
import BlurExample from "./components/test/blurExample";

ReactDOM.render(<App />, document.getElementById("root"));
