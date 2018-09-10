import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index.js';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

//const store = createStore(rootReducer) //applyMiddleware(thunk))
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
 const store = createStoreWithMiddleware(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
