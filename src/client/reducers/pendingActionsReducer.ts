import initialState from "./initialState";

export default function pendingActionsReducer(state = initialState.pendingActions) {
    return onInProgressAction(state);
}

function onInProgressAction(state: number) {
    return state + 1;
}
