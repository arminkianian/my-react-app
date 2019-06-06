import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game/game";
import Clock from "./components/dateTime/clock";
import Toggle from "./components/test/toggle";
import Calculator from "./components/temperature/calculator";
import SignUpDialog from "./components/dialog/signUpDialog";

ReactDOM.render(<SignUpDialog />, document.getElementById("root"));
