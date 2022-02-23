import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from "@web3-react/core"
import {ethers} from 'ethers'
import { Web3Provider } from '@ethersproject/providers'


function getLibrary(provider){
  if(provider){return new Web3Provider(provider)}
  // const library = localStorage.getItem("library")
  // if(library){return new Web3Provider(library)}
  // }
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </Web3ReactProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();