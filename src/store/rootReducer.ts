import { combineReducers } from "redux";
import repoReducer from "./Repositories/reducers";

const rootReducer = combineReducers({
  gitHub: repoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
