"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function register() {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            navigator.serviceWorker
                .register(swUrl)
                .then(registration => {
                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;
                    if (!installingWorker) {
                        return;
                    }
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === "installed") {
                            if (navigator.serviceWorker.controller) {
                                // At this point, the old content will have been purged and
                                // the fresh content will have been added to the cache.
                                // It"s the perfect time to display a "New content is
                                // available; please refresh." message in your web app.
                                console.log("New content is available; please refresh."); // tslint:disable-line
                            }
                            else {
                                // At this point, everything has been precached.
                                // It"s the perfect time to display a
                                // "Content is cached for offline use." message.
                                console.log("Content is cached for offline use."); // tslint:disable-line
                            }
                        }
                    };
                };
            })
                .catch(error => {
                console.error("Error during service worker registration:", error); // tslint:disable-line
            });
        });
    }
}
exports.default = register;
function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;
//# sourceMappingURL=registerServiceWorker.js.map