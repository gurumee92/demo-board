import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Router from "./routes/Router";
import Navigator from "./components/common/Navigator"

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      <header className="main__header">
        <h1><Link to="/">Demo Board</Link></h1>
      </header>
      <nav className="main__navigator">
        <Navigator isAuth={isAuth} setAuth={setAuth} />
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
