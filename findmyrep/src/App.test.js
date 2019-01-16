import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Components/Header/index.js";
import { AppWrapper } from "./App";
import { shallow, mount, render } from "enzyme";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
