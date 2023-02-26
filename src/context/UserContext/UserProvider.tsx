import { ReactNode } from "react";
import {INITIAL_STATE, UserContext} from "./UserContext"

interface IProps {
    children: ReactNode;
}

export const UserContextProvider = ({children} : IProps) =>{
    return(<UserContext.Provider value={{state: INITIAL_STATE}}>{children}</UserContext.Provider>)
}