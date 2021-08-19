import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from '@pokemon-component-svg';
import './styles.scss';

export default function Landing({
  loading,
  onClickMorePressed,
  list,
  title,
  showLoadMore,
  detailRedirect,
}) {
  const mainWrapper = useRef();

  function renderLoading() {
    if (loading) {
      return (
        <div>
          <Loading width="100px" height="100px" />
        </div>
      );
    }
    if (showLoadMore) {
      return (
        <Col className="mt-4" sm={12}>
          <button
            onClick={onClickMorePressed}
            className="btn btn-primary btn-load-more"
          >
            Click Here To Load more
          </button>
        </Col>
      );
    }
    return null;
  }

  return (
    <div ref={mainWrapper} className="col-12 landing-pokemon">
      <p className="text-primary text-bold text-center title">{title}</p>
      <Row className="my-5">
        {list.map((pokemon, index) => (
          <Col
            key={pokemon.id + '-' + index}
            className={`pokemon ${index % 2 === 0 ? 'odd' : ''}`}
            sm="5"
          >
            <Link
              to={detailRedirect(pokemon)}
              className="d-flex flex-row align-items-center"
            >
              <img src={pokemon.img} className="poke-img" />
              <div className="flex-1">
                <h3 className="text-bold">{pokemon.name}</h3>
                <div className="d-flex flex-row mt-4">
                  <div className="d-flex flex-column text-container">
                    <div className="d-flex flex-row content">
                      <p>Exp: </p>
                      <p>{pokemon.base_experience}</p>
                    </div>
                    <div className="d-flex flex-row content">
                      <p>Height: </p>
                      <p>{pokemon.height}</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column text-container">
                    <div className="d-flex flex-row content">
                      <p>Species: </p>
                      <p>{pokemon.species}</p>
                    </div>
                    <div className="d-flex flex-row content">
                      <p>Weight: </p>
                      <p>{pokemon.weight}</p>
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

Landing.defaultProps = {
  loading: false,
  onClickMorePressed: () => {},
  list: [],
  title: 'List Pokemon',
  showLoadMore: true,
  detailRedirect: (pokemon) => `/detail/${pokemon.id}`,
};

Landing.propTypes = {
  loading: PropTypes.bool,
  onClickMorePressed: PropTypes.func,
  list: PropTypes.arrayOf(Object),
  title: PropTypes.string,
  showLoadMore: PropTypes.bool,
  detailRedirect: PropTypes.func,
};
