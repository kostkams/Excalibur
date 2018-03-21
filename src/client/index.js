"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const configureStore_1 = require("./store/configureStore");
const registerServiceWorker_1 = require("./registerServiceWorker");
const configuredStore = configureStore_1.default();
const app = React.createElement("div", null, "Hello World");
ReactDOM.render(app, document.getElementById("example"));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map