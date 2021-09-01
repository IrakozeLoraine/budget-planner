import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'


import { AppProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
