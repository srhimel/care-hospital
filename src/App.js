import Header from './pages/shared/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Account from './pages/Account/Account';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
