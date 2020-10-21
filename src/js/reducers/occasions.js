const occasionsReducerDefaultState = [];

export default (state = occasionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OCCASION':
            return [
                ...state,
                action.occasion
            ];
            case 'REMOVE_OCCASION':
                return state.filter(({ id }) => id !== action.id);
            
            case 'EDIT_OCCASION':
                return state.map((occasion) => {
                    if(occasion.id === action.id) {
                        return {
                            ...occasion,
                            ...action.updates
                        };
                    }else {
                        return occasion;
                    }
                });
                case 'GET_OCCASIONS':
                    return action.occasions;
                default: 
                return state;
    }
};