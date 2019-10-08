const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const exist = state.myList.find(element => element.id === action.payload.id);

            return exist ? state :
                {
                ...state,
                myList: [...state.myList, action.payload]
            };
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
