import React, { useRef, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { range } from '@pokemon-utils/helper';
import { Loading } from '@pokemon-component-svg';
import './styles.scss';

export default function Landing() {
  const mainWrapper = useRef();
  const [loading, setLoading] = useState(false);

  function renderLoading() {
    if (loading) {
      return (
        <div>
          <Loading width="100px" height="100px" />
        </div>
      );
    }
    return (
      <Col className="mt-4" sm={12}>
        <button
          onClick={() => setLoading(true)}
          className="btn btn-primary btn-load-more"
        >
          Click Here To Load more
        </button>
      </Col>
    );
  }

  return (
    <div ref={mainWrapper} className="col-12" id="landing">
      <p className="text-primary text-bold text-center title">List Pokemon</p>
      <Row className="my-5">
        {range(12).map((i) => (
          <Col key={i} className={`pokemon ${i % 2 === 0 ? 'odd' : ''}`} sm="5">
            <Link
              to={`/detail/${i}`}
              className="d-flex flex-row align-items-center"
            >
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
                className="poke-img"
              />
              <div className="flex-1">
                <h3 className="text-bold">Gilbolo</h3>
                <div className="d-flex flex-row mt-4">
                  <div className="d-flex flex-column text-container">
                    <div className="d-flex flex-row content">
                      <p>Exp: </p>
                      <p>239</p>
                    </div>
                    <div className="d-flex flex-row content">
                      <p>Height: </p>
                      <p>16</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column text-container">
                    <div className="d-flex flex-row content">
                      <p>Species: </p>
                      <p>Gilbolo</p>
                    </div>
                    <div className="d-flex flex-row content">
                      <p>Weight: </p>
                      <p>20</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
        {renderLoading()}
      </Row>
    </div>
  );
}
