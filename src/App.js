import React from "react";

import { CardLayout, Notification } from "./components";
import './App.scss';

function App() {

  return (
    <main>
      <div className="App">
        <CardLayout>
          <Notification />
        </CardLayout>
      </div>
    </main >
  );
};

export default App;
