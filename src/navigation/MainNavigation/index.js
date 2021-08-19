import React, { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Col, Row, Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '@pokemon-component-layout';
import './styles.scss';

const Landing = lazy(() => import('@pokemon-module/screens/Landing'));

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
        <AnimatePresence>
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
                    </Switch>
                  </Suspense>
                </div>
              </Col>
            </Row>
          </Col>
        </AnimatePresence>
      </BrowserRouter>
    </Container>
  );
}

export default App;
