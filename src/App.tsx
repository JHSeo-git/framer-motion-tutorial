import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Page404 from './pages/404'
import Home from './pages/Home'
import SampleCard from './pages/sample/SampleCard'
import TossBank from './pages/sample/TossBank'

function App() {
  return (
    <Router>
      <Header />
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
              <Route path="/sample/tossbank">
                <TossBank />
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
