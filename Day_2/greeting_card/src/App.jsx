// 

import React from "react";
import GreetingCard from "./GreetingCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Greeting Cards</h1>

      <GreetingCard
        name="Tunde"
        message="Have a great day!"
        color="green"
      />

      <GreetingCard
        name="Ada"
        message="Wishing you success in your exams!"
        color="blue"
      />

      <GreetingCard
        name="Sam"
        message="Keep shining bright!"
        color="deepblue"
        // no color prop → uses default "lightgray"
      />
    </div>
  );
}

export default App;
