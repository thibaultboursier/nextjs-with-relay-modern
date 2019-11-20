import { createContext, useContext } from "react";

const RelayContext = createContext();

export const RelayProvider = ({ children, environment, variables }) => (
  <RelayContext.Provider
    value={{
      environment,
      variables
    }}
  >
    {children}
  </RelayContext.Provider>
);

export const useRelayContext = () => useContext(RelayContext);
