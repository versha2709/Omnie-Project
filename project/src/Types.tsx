import { ReactNode } from "react";

export interface SignInFormValues {
  username: string;
  password: string;
}


export interface ProvidersProps {
  children: ReactNode;
}


export interface RootState {
  auth: AuthState;
}

export interface AuthState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

