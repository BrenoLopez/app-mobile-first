import { combineReducers } from "redux";

import {reducer as offline} from "redux-offline-queue";
import {reducer as users} from './users';

export default combineReducers({
  offline,
  users 
});
