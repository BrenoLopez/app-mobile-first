import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {markActionsOffline} from 'redux-offline-queue';


/* Types & Action Creators */

const { Types, Creators } = createActions({
    addUser: ['dataUser'],
});

markActionsOffline(Creators,['addUser']);

export const UsersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    data: {}
});

/* Reducers */

export const addUser = (state,{dataUser}) =>{
    console.log('entrou aqui')
       return state.merge({data: dataUser});
}


  
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_USER]: addUser
});
