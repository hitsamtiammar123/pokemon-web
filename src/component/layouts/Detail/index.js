import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, FormGroup, Input, Button } from 'reactstrap';
import Lottie from 'react-lottie';
import { Loading } from '@pokemon-component-svg';
import { Pikachu, Tortoise } from '@pokemon-lottie';
import { addPokemon } from '@pokemon-redux/pokemon/actions';
import './styles.scss';

export default function Detail({ loading, pokemon, type, onPokemonBtnClick }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [cathingPokemonFlag, setCathingPokemonFlag] = useState(-1);
  const [nickname, setNickName] = useState('');

  function renderLottieAnimation() {
    const p = Math.floor(Math.random() * 2);
    const anim = p === 1 ? Pikachu : Tortoise;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: anim,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <div className="detail-pokemon">
        <Lottie options={defaultOptions} height={500} width={500} />
        <p className="text-center text-danger text-bold poke-cathing">
          Catching Pokemon...
        </p>
      </div>
    );
  }

  function submitAfterCatch() {
    const newPokemon = {
      ...pokemon,
      name: nickname,
      index: pokemon.id + '-' + new Date().getTime(),
    };
    dispatch(addPokemon(newPokemon));
    history.push('/');
  }

  function cathingPokemon() {
    setCathingPokemonFlag(0);
    setTimeout(() => {
      const r = Math.floor(Math.random() * 100);
      let n;
      if (r < 50) {
        n = 2;
      } else {
        n = 1;
      }
      setCathingPokemonFlag(n);
    }, 4500);
  }

  function renderSucceededCathingPokemon() {
    return (
      <div className="detail-pokemon">
        <div className="d-flex flex-column align-items-center mb-5">
          <img src={pokemon.img} className="poke-img" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="col-8">
            <p className="text-center text-info text-success text-bold">
              Yeaaay You catched a pokemon. Give your pokemon nickname
            </p>
            <FormGroup>
              <Input
                type="text"
                name="nickname"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
                placeholder="Nickname"
              />
            </FormGroup>
            <div className="d-flex">
              <Button
                disabled={nickname === ''}
                color="success"
                onClick={submitAfterCatch}
                className="mt-4 flex-1"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderFailedCatchingPokemon() {
    return (
      <div className="detail-pokemon">
        <div className="d-flex flex-column align-items-center mb-5">
          <img src={pokemon.img} className="poke-img" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="col-8">
            <p className="text-center text-info text-danger text-bold">
              Sorry, You Failed to catch this pokemon. Try again?
            </p>
            <div className="d-flex">
              <Button
                onClick={() => cathingPokemon()}
                color="primary"
                className="mt-4 flex-1 me-3"
              >
                Try Again
              </Button>
              <Button
                onClick={() => history.push('/')}
                color="dark"
                className="mt-4 flex-1"
              >
                Go To Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderPokemonBtn() {
    let btnClass, onClick, title;

    if (type === 'mypokemon') {
      btnClass = 'btn-danger';
      onClick = onPokemonBtnClick;
      title = 'Release';
    } else {
      btnClass = 'btn-primary';
      onClick = cathingPokemon;
      title = 'Catch';
    }

    return (
      <button onClick={onClick} className={`btn ${btnClass} btn-catch`}>
        {title}
      </button>
    );
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (cathingPokemonFlag !== -1) {
    switch (cathingPokemonFlag) {
      case 0:
        return renderLottieAnimation();
      case 1:
        return renderSucceededCathingPokemon();
      case 2:
        return renderFailedCatchingPokemon();
      default:
    }
  }

  if (typeof pokemon !== 'object') {
    return (
      <div className="d-flex flex-column align-items-center">
        <h2>Pokemon not found</h2>
      </div>
    );
  }

  return (
    <div className="col-12 detail-pokemon">
      <Row className="my-5">
        <Col className="d-flex flex-column align-items-center" sm="4">
          <img src={pokemon.img} className="poke-img" />
          {renderPokemonBtn()}
        </Col>
        <Col className="px-5" sm="8">
          <h1 className="text-bold pokemon-name">{pokemon.name}</h1>
          <div className="d-flex flex-row flex-1">
            <div className="d-flex flex-column flex-1 mt-5 poke-detail">
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Species</p>
                <p>{pokemon.species}</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>EXP</p>
                <p>{pokemon.base_experience}</p>
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>height</p>
                <p>{pokemon.height}</p>
              </div>
              {pokemon.stats
                ? (() => {
                    const r = [];
                    for (let i in pokemon.stats) {
                      const stat = pokemon.stats[i];
                      r.push(
                        <div
                          key={i}
                          className="d-flex flex-row justify-content-between text-container"
                        >
                          <p>{i}</p>
                          <p>{stat}</p>
                        </div>
                      );
                    }
                    return r;
                  })()
                : null}
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Abilities</p>
                {pokemon.abilities ? (
                  <ul>
                    {pokemon.abilities.map((ability, index) => (
                      <li key={index}>{ability}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Moves</p>
                {pokemon.moves ? (
                  <ul>
                    {pokemon.moves.map((move, index) => (
                      <li key={index}>{move}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>versions</p>
                {pokemon.versions ? (
                  <ul>
                    {pokemon.versions.map((v, index) => (
                      <li key={index}>{v}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="d-flex flex-row justify-content-between text-container">
                <p>Types</p>
                {pokemon.types ? (
                  <ul>
                    {pokemon.types.map((v, index) => (
                      <li key={index}>{v}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

Detail.defaultProps = {
  loading: false,
  pokemon: {},
  type: 'default',
  onPokemonBtnClick: () => {},
};

Detail.propTypes = {
  loading: PropTypes.bool,
  pokemon: PropTypes.objectOf(Object),
  type: PropTypes.string,
  onPokemonBtnClick: PropTypes.func,
};
