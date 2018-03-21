import { combineReducers } from "redux";
import IStoreState from "../store/IStoreState";
import pendingActions from "./pendingActionsReducer";

const rootReducer = combineReducers<IStoreState>({
    pendingActions
});

export default rootReducer;