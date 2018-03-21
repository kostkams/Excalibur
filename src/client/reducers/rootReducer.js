"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const pendingActionsReducer_1 = require("./pendingActionsReducer");
const rootReducer = redux_1.combineReducers({
    pendingActions: pendingActionsReducer_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map