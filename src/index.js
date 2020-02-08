import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,combineReducers,compose} from 'redux';
import blogreducer from './reducers/blogreducer';
import testreducer from './reducers/testreducer';
import cartreducer from './reducers/cartreducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const masterReducers = combineReducers({
	blog:blogreducer,
	test:testreducer,
	cart:cartreducer,
})

const storex = createStore(masterReducers,composeEnhancers());

console.log(storex);
ReactDOM.render(<Provider store={storex}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
