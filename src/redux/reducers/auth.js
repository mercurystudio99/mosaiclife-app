import { SET_CREDENTIALS, LOG_OUT, ACCEPT_TERMS, SET_USER_ROLE } from "../constants/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
    user: null,
    token: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CREDENTIALS:
            AsyncStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                token: action.payload.token
            };
        case LOG_OUT:
            AsyncStorage.removeItem("user");
            return {};
        case ACCEPT_TERMS:
            let newUser = { ...state.user }
            newUser.is_first_login = false;
            AsyncStorage.setItem('user', JSON.stringify(newUser));
            return {
                ...state,
                user: newUser,
            };
        case SET_USER_ROLE:
            let currentUser = { ...state.user }
            currentUser.user_role_type = action.payload.user_role_type;
            currentUser.is_daily_reminder_checked = action.payload.is_daily_reminder_checked;
            AsyncStorage.setItem('user', JSON.stringify(currentUser));
            return {
                ...state,
                user: currentUser,
            };

        default:
            return state;
    }
}

export const loadUserData = () => async (dispatch) => {
    try {
        // Retrieve user data from AsyncStorage
        const userData = await AsyncStorage.getItem('user');

        if (userData) {
            // If user data exists, dispatch the loginSuccess action with the retrieved data
            dispatch({ type: SET_CREDENTIALS, payload: JSON.parse(userData) });
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        // Handle AsyncStorage read error
    }
};