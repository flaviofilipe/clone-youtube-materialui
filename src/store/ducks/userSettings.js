/**
 * Default Types
 */
export const Types = {
    DARKMODE: '@userSettings/dark_mode',
};

/**
 * Default values
 */
const INITIAL_STATE = {
    dark_mode: false
};

/**
 * Creating Reducers
 */
export default function userSettings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.DARKMODE:
            return { ...state, dark_mode: action.dark_mode };
        case Types.TESTE:
            return { ...state };

        default:
            return state;
    }
}

/**
 * Creating actions
 */
export const Creators = {
    setDarkMode: (dark_mode) => ({
        type: Types.DARKMODE,
        dark_mode
    }),

};