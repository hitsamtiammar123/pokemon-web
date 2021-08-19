import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Loading } from '@pokemon-component-svg';
import './styles.scss';

export default function Detail() {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="col-12" id="detail">
      <Row className="my-5">
        <Col className="d-flex flex-column align-items-center" sm="4">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
            className="poke-img"
          />
          <button className="btn btn-primary btn-catch">Catch</button>
        </Col>
        <Col className="px-5" sm="8">
          <h1 className="text-bold pokemon-name">Gilbolo</h1>
          <div className="d-flex flex-row flex-1">
            <div className="d-flex flex-column flex-1 mt-5 poke-detail">
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Species</p>
                <p>Glibolo</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>EXP</p>
                <p>178</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>height</p>
                <p>11</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>hp</p>
                <p>60</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>hp</p>
                <p>60</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>hp</p>
                <p>60</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>hp</p>
                <p>60</p>
              </div>
            </div>
            <div className="d-flex flex-column flex-1 mt-5 poke-detail">
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Abilities</p>
                <ul>
                  <li>compound-eyes</li>
                  <li>tinted-lens</li>
                </ul>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Moves</p>
                <ul>
                  <li>Moves 1</li>
                  <li>Moves 2</li>
                  <li>Moves 3</li>
                  <li>Moves 4</li>
                </ul>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>versions</p>
                <ul>
                  <li>v 1</li>
                  <li>v 2</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
