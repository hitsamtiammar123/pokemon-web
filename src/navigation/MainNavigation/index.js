import React, { lazy, Suspense } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '@pokemon-component-layout';
import './styles.scss';

const Landing = lazy(() => import('@pokemon-module/screens/Landing'));
const Detail = lazy(() => import('@pokemon-module/screens/Detail'));
const MyPokemon = lazy(() => import('@pokemon-module/screens/MyPokemon'));
const MyPokemonDetail = lazy(() =>
  import('@pokemon-module/screens/MyPokemonDetail')
);

function Fallback() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <p>Loading...</p>
    </div>
  );
}

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Col sm="12">
          <Row>
            <Col className="content bg-background" sm="12">
              <Header />
              <div className="main-content">
                <Suspense fallback={<Fallback />}>
                  <Switch>
                    {/** Redirect into default page */}
                    <Route exact path="/">
                      <Landing />
                    </Route>
                    <Route exact path="/detail/:id">
                      <Detail />
                    </Route>
                    <Route exact path="/mypokemon">
                      <MyPokemon />
                    </Route>
                    <Route exact path="/detail/:id/mypokemon">
                      <MyPokemonDetail />
                    </Route>
                  </Switch>
                </Suspense>
              </div>
            </Col>
          </Row>
        </Col>
      </BrowserRouter>
    </Container>
  );
}

export default App;
