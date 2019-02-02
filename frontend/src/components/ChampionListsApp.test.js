import React from "react";
import ReactDOM from "react-dom";
import ChampionListsApp from "./ChampionListsApp";

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChampionListsApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
