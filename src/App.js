import React from 'react'
import { Link } from 'react-router-dom';
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <header className="main__header">
        <h1><Link to="/">Demo Board</Link></h1>
      </header>
      <nav className="main__navigator">
        로그인
      </nav>
      <main className="main__main">
        <section className="main__section">
          <Router />
        </section>
      </main>
      <footer className="main__footer">
        footer
      </footer>
    </div>
  );
}

export default App;
