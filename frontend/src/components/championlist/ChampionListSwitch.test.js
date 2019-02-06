import React from "react";
import ReactDOM from "react-dom";
import ChampionListSwitch from "./ChampionListSwitch";

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChampionListSwitch />, div);
    ReactDOM.unmountComponentAtNode(div);
});
