import React from "react";
import ArticleCard from "./components/ArticleCard";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <ArticleCard />
    </div>
  );
}

export default App;
