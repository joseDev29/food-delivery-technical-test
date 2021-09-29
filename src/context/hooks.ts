import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useStateDispatch = () => useDispatch<AppDispatch>();
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
