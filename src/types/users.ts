export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}


export type UserAction = FetchUserAction | FetchUserSuccssesAction | FetchUserErrorAction;

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccssesAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}
