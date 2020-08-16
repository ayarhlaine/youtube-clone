export const initialState = {
    isOpenedSideBar: false,
};
export const actionTypes = {
    UPDATE_SIDEBAR: "UPDATE_SIDEBAR",
};

export const reducer = (state , action) => {
    switch(action.type){
        case actionTypes.UPDATE_SIDEBAR: {
            return {
                ...state,
                isOpenedSideBar: action.payload,
            }
        }
        default: return state;
    }
}

export default reducer;