import React from "react";
import ReactDOM from "react-dom";
import ChampionPreferenceListsApp from "./ChampionPreferenceListsApp";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ChampionPreferenceListsApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
