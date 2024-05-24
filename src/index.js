import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import ScrollToTop from "./hooks/ScrollToTop";
import { Provider } from "react-redux";
import store from "./redux";
import '../public/assets/css/admin.css'
// const root = createRoot(document.getElementById('root'));
// root.render(
  //<React.StrictMode>
  <>    
  {/* <AppRouter/> */}
    {/* <Header/> */}
    {/* <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter> */}

    
    </>
//  </React.StrictMode>

// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>

    {/* <ScrollToTop> */}
    <Provider store={store}>
        <App />
    </Provider>
      {/* </ScrollToTop> */}
      </>
  </React.StrictMode>
);
