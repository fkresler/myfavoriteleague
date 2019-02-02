import React from "react";
import ReactDOM from "react-dom";
import ChampionCard from "./ChampionCard";

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChampionCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
