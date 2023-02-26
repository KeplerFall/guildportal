import { createContext } from "react";

export const INITIAL_STATE = {}

export const UserContext = createContext({
    state: INITIAL_STATE
})