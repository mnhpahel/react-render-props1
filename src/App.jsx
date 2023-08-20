import { useState } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import KeyUpCounter from "./components/KeyUpCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter
        render={(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      />
      <counter />
      <Counter
        render={(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(counter, incrementCount) => (
          <KeyUpCounter count={counter} incrementCount={incrementCount} />
        )}
      />
    </>
  );
}

export default App;
