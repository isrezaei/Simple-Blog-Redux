import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {Store} from "./Store";
import {GetPosts} from "./Posts/PostSlice";
import {GetUsers} from "./Users/UserSlice";
import {LocalStorageSetData} from "./Database/LocalStorageSetData";

// Store.dispatch(GetPosts())
// Store.dispatch(GetUsers())

LocalStorageSetData()

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

