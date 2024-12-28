import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const pullNote = (item) => (
  <Note key={item.key} title={item.title} content={item.content} />
);

function App() {
  return (
    <div>
      <Header />
      {notes.map(pullNote)}
      <Footer />
    </div>
  );
}

export default App;
