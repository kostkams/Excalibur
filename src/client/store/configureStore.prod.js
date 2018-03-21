"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const rootReducer_1 = require("../reducers/rootReducer");
function configureStore() {
    return redux_1.createStore(rootReducer_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
}
exports.default = configureStore;
//# sourceMappingURL=configureStore.prod.js.map