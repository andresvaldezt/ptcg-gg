import { createContext, useEffect, useState, useContext, type ReactNode } from "react";

interface AuthContextType {
    session: string,
    setSession: React.Dispatch<React.SetStateAction<string>>
}

const EmptyGlobalState: string = '';

const AuthContext = createContext<AuthContextType>({
    session: '',
    setSession: () => {},
});

interface GlobalProps {
    children: ReactNode
}


export const AuthContextProvider = ({children}: GlobalProps) => {
    const [session, setSession] = useState<string>(EmptyGlobalState);

    return(
        <AuthContext.Provider value={{session, setSession}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    const context = useContext(AuthContext);

    if(!context.session && context.session !== ''){
        throw new Error('Global Context must be used within a GlobalContextProvider')
    }
    return context
}