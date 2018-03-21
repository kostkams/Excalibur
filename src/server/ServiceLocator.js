"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
class ServiceLocator {
    constructor() {
        this.container = new inversify_1.Container();
    }
    static getInstance() {
        if (!ServiceLocator.instance) {
            ServiceLocator.instance = new ServiceLocator();
        }
        return ServiceLocator.instance;
    }
}
exports.ServiceLocator = ServiceLocator;
//# sourceMappingURL=ServiceLocator.js.map