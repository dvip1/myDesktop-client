import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: object;
  setTheme: React.Dispatch<React.SetStateAction<object>>;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: {}, setTheme: () => { } });

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<object>({});
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
