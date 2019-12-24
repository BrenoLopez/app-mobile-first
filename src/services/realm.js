import Realm from 'realm';
import User from '../schemas/User';

export default function getRealm(){
    const Schema = [
        User
    ];
    return Realm.open({schema: Schema});
}