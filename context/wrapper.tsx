'use client'
import React, { createContext, useState } from 'react';

interface AppContextType {
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppWrapper({ children }: { children: React.ReactNode }) {

  const [navbar,setNavbar] = useState(false);

  return (
    <AppContext.Provider value={{ 
      navbar,
      setNavbar     
        }}>
      {children}
    </AppContext.Provider>
  );
}