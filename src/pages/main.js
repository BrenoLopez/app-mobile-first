import React,{useState,useEffect} from 'react';
import { KeyboardAvoidingView,Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text,View } from 'react-native';
import api from '../services/Api';
import getRealm from '../services/realm';
import { bindActionCreators } from "redux";
import {connect, useSelector,useDispatch} from 'react-redux';
import UserActions from "../store/ducks/users";

 function Main(props) {
    const [user, setUser] = useState('');
    const valueRedux = useSelector(state => state);
    console.log(valueRedux);
    
    async function handleSubmit() {
        const realm = await getRealm();
        let lastUser = realm.objects('Users').sorted('id', true)[0];
        let highestId = lastUser == null ? 0 : lastUser.id;
         
         realm.write(async ()=>{
             let insert =  realm.create(
                "Users", {id: highestId == null ? 1 : highestId + 1,name: user }, "modified"
            );
                if(insert){
                   props.addUser({id:insert.id,name:insert.name});
                   setUser('')
                }
         
            });
        console.log(realm.objects('Users'));
    }
    
    return (
        <KeyboardAvoidingView 
        behavior= 'padding'
        enabled={Platform
        .OS === 'ios'}
        style={styles.container}>
            <TextInput
                autoCapitalize= "none"
                autoCorrect = {false}
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
                value={user}
                onChangeText={setUser}
                />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
          
     
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        marginTop: 20,
        borderRadius: 4,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        borderRadius: 4,
        backgroundColor: '#df4723',
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color:'#fff',
        fontWeight: "bold",
        fontSize: 16
        }
});

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);