import { configureStore } from '@reduxjs/toolkit';
import authedUser from "./services/reducers/authedUser";
import users from "./services/reducers/users";
import questions from "./services/reducers/questions";

export const store = configureStore({
    reducer: { authedUser, users, questions },
});