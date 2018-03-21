import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IStoreState from "../store/IStoreState";


interface IAppProps  {
    readonly isBusy: boolean;
}

class App extends React.Component<IAppProps> {
    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className="container-fluid">
                    {this.props.isBusy} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        isBusy: false
    };
}
