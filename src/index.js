import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle.js';
import { BrowserRouter } from "react-router-dom";
import { Theme } from './theme/Theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <BrowserRouter>
      <Theme >
        <App />
      </Theme > 
     </BrowserRouter>
     <GlobalStyle/>
    </React.StrictMode>
   
);


