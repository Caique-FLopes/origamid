import React from "react";
import { AuthContext } from "../contexts/AuthProvider";

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("Bota no provider");
  return context;
};
