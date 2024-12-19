import React from "react";
import MarkdownPreviewer from "./MarkdownPreviewer";
import MarkdownCheatsheet from "./MarkdownCheatsheet";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <ThemeToggle /> {/* Add the ThemeToggle here */}
      <MarkdownPreviewer />
      <MarkdownCheatsheet />
      <footer>
        <p>Developed by Eddie Jonathan García Borbón</p>
      </footer>
    </div>
  );
}

export default App;