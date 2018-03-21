"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid" },
                this.props.isBusy,
                " />")));
    }
}
function mapStateToProps(state) {
    return {
        isBusy: false
    };
}
//# sourceMappingURL=App.js.map