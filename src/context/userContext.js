import { createContext, useContext, useState } from "react";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
  url: "http://localhost:4000/graphql",
});

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem("homebucket"))
  const value = { user, setUser };
  return (
    <ClientContext.Provider value={client}>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </ClientContext.Provider>
  );
};
