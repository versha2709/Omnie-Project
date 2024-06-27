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

export interface DynamicFormProps {
  sliceName: string;
  onClose: () => void;
}

export interface StateData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

export interface StateSliceState {
  data: StateData[];
  loading: boolean;
  error: string | null;
}

export interface AddSliceState {
  data: StateData[];
  loading: boolean;
  error: string | null;
}

export interface ButtonConfig {
  label: string;
  action: () => void;
}
