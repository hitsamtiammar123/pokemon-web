import React, { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Col, Row, Container } from 'reactstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '@pokemon-component-layout';
import './styles.scss';

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
                      <Redirect exact from="/" to="/" />
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
