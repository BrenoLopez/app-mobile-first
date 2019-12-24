import {call,put} from 'redux-saga/effects';
import api from '../../services/Api';
import UsersActions from '../ducks/users';

export function* addUser({dataUser}){
     yield call(api.post,'/create-user',dataUser);

}