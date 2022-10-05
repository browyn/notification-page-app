import React from "react";

import { CardLayout, Notification } from "./components";
import './App.scss';

function App() {

  return (
    <div className="App">
      <CardLayout>
        <Notification />
      </CardLayout>
    </div>
  );
};

export default App;
