// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore({reducer});


store.subscribe(()=>{
    localStorage["contacts"] = JSON.stringify(store.getState().contacts.items)
});

export default store;
