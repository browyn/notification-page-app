import React from "react";

import { CardLayout, Notification } from "./components";
import './App.scss';

function App() {

  return (
    <div className="App">
      <main>
        <CardLayout>
          <Notification />
        </CardLayout>
      </main>
    </div>
  );
};

export default App;
