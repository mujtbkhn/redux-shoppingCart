import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Route from "./components/Route";


function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
