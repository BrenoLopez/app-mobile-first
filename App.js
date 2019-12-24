import React from 'react';
import {Provider} from 'react-redux';

import './src/config/reactotron';

import store from './src/store';

import Main from './src/pages/main';

const App = () =>(
    <Provider store={store}>
        <Main/>
    </Provider>)


export default App;