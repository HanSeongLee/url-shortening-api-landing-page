export const initialState = {
    links: [],
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'init_stored': {
            return action.value;
        }
        case 'add_link': {
            return {
                ...state,
                links: [
                    ...state?.links,
                    action.value,
                ]
            };
        }
    }
};
