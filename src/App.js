import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Router from "components/Router";
import Navigator from "components/common/Navigator";
import LoginModal from "components/common/LoginModal";
import { loginModalState } from 'stores/modals'

function App() {
  const isLoginModalUp = useRecoilValue(loginModalState);

  return (
    <div className="App">
      <header className="main__header">
        <h1><Link to="/">Demo Board</Link></h1>
      </header>
      <nav className="main__navigator">
        <Navigator />
      </nav>
      <main className="main__main">
        <div className="main__main__modal">
          { (isLoginModalUp) && <LoginModal /> }
        </div>
        <section className="main__main__section">
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
