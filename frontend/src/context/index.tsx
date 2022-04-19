import React, { createContext, useState } from "react";
import { Repos, RepoDetail } from "../interface/Github.interface";

type Props = {
  children: JSX.Element;
};

export interface ContextType {
  repo: null | Repos;
  setRepo: React.Dispatch<any>;
}

export const Context = createContext<null | ContextType>(null);

const ContextProvider = ({ children }: Props) => {
  const [repo, setRepo] = useState(null);

  return (
    <Context.Provider
      value={{ repo, setRepo}}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
