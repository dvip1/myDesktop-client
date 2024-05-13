import { useState, createContext, useContext, ReactNode } from "react";
interface PanelContextType {
    theme: object;
    setTheme: React.Dispatch<React.SetStateAction<object>>;
}

export const PanelContext = createContext<PanelContextType>({ theme: {}, setTheme: () => { } })

interface ThemeProviderProps {
    children: ReactNode;
}

export const PanelProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<object>({});
    return (
        <PanelContext.Provider value={{ theme, setTheme }}>
            {children}
        </PanelContext.Provider>
    )
}