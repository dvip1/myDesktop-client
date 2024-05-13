import { useState, createContext, ReactNode } from "react";
interface DockContextType {
    theme: object;
    setTheme: React.Dispatch<React.SetStateAction<object>>;
}

export const DockContext = createContext<DockContextType>({ theme: {}, setTheme: () => { } })

interface ThemeProviderProps {
    children: ReactNode;
}

export const DockProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<object>({});
    return (
        <DockContext.Provider value={{ theme, setTheme }}>
            {children}
        </DockContext.Provider>
    )
}