// store.tsx
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stateReducer from "./StateSlice";
import countryReducer from "./CountrySlice";
import brandReducer from "./BrandSlice";
import leadStatusReducer from "./LeadStatusSlice";
import roleReducer from "./RoleSlice";
import genderReducer from "./GenderSlice";
import storeReducer from "./StoreSlice";
import layoutReducer from "./LayoutSlice";
import settingsReducer from "./SettingsSlice";
import leadTypeReducer from "./LeadTypeSlice";
import authReducer from "./SigninSlice";

const rootReducer = combineReducers({
  auth: authReducer,

  state: stateReducer,
  country: countryReducer,
  brand: brandReducer,
  leadStatus: leadStatusReducer,
  role: roleReducer,
  gender: genderReducer,
  store: storeReducer,
  layout: layoutReducer,
  settings: settingsReducer,
  leadType: leadTypeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
