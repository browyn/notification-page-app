import React from "react";

import { CardLayout, Notification } from "./components";
import './App.scss';

function App() {

  const [read, setRead] = React.useState(false);

  return (
    <main>
      <div className="App">
        <CardLayout read={read} setRead={setRead}>
          <Notification read={read} />
        </CardLayout>
      </div>
    </main >
  );
};

export default App;
