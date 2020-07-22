import React from "react";
import { UIView, useSrefActive } from "@uirouter/react";

const App = () => {
  const activeClass = "active";
  const helloSref = useSrefActive("hello", null, activeClass);
  const aboutSref = useSrefActive("about", null, activeClass);

  return (
    <div>
      <a {...helloSref}>Hello</a>
      <a {...aboutSref}>About</a>
      <UIView />
    </div>
  );
};

export default App