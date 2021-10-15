import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Layout from './components/Layout'
import Page404 from './pages/404'
import Home from './pages/Home'
import SampleCard from './pages/sample/SampleCard'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/404">
            <Page404 />
          </Route>
          <Route path="/sample">
            <Switch>
              <Route path="/sample/card">
                <SampleCard />
              </Route>
            </Switch>
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
