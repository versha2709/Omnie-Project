"use client";

import { Provider } from "react-redux";
import { ProvidersProps } from "@/Types";
import store from "./store";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
