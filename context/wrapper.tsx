'use client'
import React, { createContext, useState } from 'react';

interface AppContextType {
  sample: string;
  setSample: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export function AppWrapper({ children }: { children: React.ReactNode }) {

  const [sample,setSample] = useState('some sample')

  return (
    <AppContext.Provider value={{ 
      sample,
      setSample       
        }}>
      {children}
    </AppContext.Provider>
  );
}