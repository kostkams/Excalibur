"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configureStore_dev_1 = require("./configureStore.dev");
const configureStore_prod_1 = require("./configureStore.prod");
const configure = process.env.NODE_ENV === "production"
    ? configureStore_prod_1.default
    : configureStore_dev_1.default;
exports.default = configure;
//# sourceMappingURL=configureStore.js.map