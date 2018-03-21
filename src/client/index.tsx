import * as React from "react";
import * as ReactDOM from "react-dom";

import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const configuredStore = configureStore();

const app = <div>Hello World</div>;

ReactDOM.render(app, document.getElementById("example"));

registerServiceWorker();