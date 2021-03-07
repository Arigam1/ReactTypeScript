export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODOS_FETCH = "SET_TODOS_FETCH",
}


interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodoSuccssesAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface SetTodoAction {
    type: TodoActionTypes.SET_TODOS_FETCH;
    payload: number;
}


export type TodoAction = FetchTodoAction
    | FetchTodoSuccssesAction
    | FetchTodoErrorAction
    | SetTodoAction;
