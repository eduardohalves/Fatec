import { createContext, useContext, useState, ReactNode } from "react";

type PalpiteContextType = {
  palpites: number[][]; 
  gerarNovoPalpite: () => number[]; 
};

const PalpiteContext = createContext<PalpiteContextType | undefined>(undefined);

export function PalpiteProvider({ children }: { children: ReactNode }) {
  const [palpites, setPalpites] = useState<number[][]>([]); 

  function gerarNovoPalpite(): number[] {
    const novo = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 60) + 1
    ).sort((a, b) => a - b);

    console.log("Novo palpite gerado:", novo); 
    setPalpites((prev) => {
      const updated = [...prev, novo]; 
      console.log("Palpites atualizados:", updated); 
      return updated;
    });
    return novo;
  }

  return (
    <PalpiteContext.Provider value={{ palpites, gerarNovoPalpite }}>
      {children}
    </PalpiteContext.Provider>
  );
}

export function usePalpite() {
  const context = useContext(PalpiteContext);
  if (!context) {
    throw new Error("usePalpite deve ser usado dentro de PalpiteProvider");
  }
  return context;
}
