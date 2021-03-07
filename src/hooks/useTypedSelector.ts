import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/redux-store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector