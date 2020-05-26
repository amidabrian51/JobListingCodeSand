import React from "react";
import "./styles.css"
import Jobs from "./components/Jobs/jobs.component";
import Heading from "./components/heading.component";

export default function App() {
  return (
    <div className="App">
      This is the job listings app
      <Heading />
      <Jobs />
    </div>
  );
}
