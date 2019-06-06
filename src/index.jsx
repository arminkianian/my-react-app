import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game/game";
import Clock from "./components/dateTime/clock";
import Toggle from "./components/test/toggle";
import Calculator from "./components/temperature/calculator";
import SignUpDialog from "./components/dialog/signUpDialog";
import FilterableProductTable from "./components/productTable/filterableProductTable";
import { Products } from "./components/productTable/products";

ReactDOM.render(
  <FilterableProductTable products={Products} />,
  document.getElementById("root")
);
