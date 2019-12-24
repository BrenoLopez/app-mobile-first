import { all, spawn, takeEvery } from "redux-saga/effects";
import {UsersTypes} from '../ducks/users';
import {addUser} from './users';
import {startWatchingNetworkConnectivity} from './offline';

export default function* rootSaga() {
  yield all([
    spawn(startWatchingNetworkConnectivity),
    takeEvery(UsersTypes.ADD_USER, addUser)
  ]);
}
