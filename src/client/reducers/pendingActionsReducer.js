"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initialState_1 = require("./initialState");
function pendingActionsReducer(state = initialState_1.default.pendingActions) {
    return onInProgressAction(state);
}
exports.default = pendingActionsReducer;
function onInProgressAction(state) {
    return state + 1;
}
//# sourceMappingURL=pendingActionsReducer.js.map