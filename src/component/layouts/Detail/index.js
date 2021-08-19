import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, FormGroup, Input, Button } from 'reactstrap';
import Lottie from 'react-lottie';
import { Loading } from '@pokemon-component-svg';
import { Pikachu, Tortoise } from '@pokemon-lottie';
import './styles.scss';

export default function Detail() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
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

  function renderSucceededCathingPokemon() {
    return (
      <div className="detail-pokemon">
        <div className="d-flex flex-column align-items-center mb-5">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
            className="poke-img"
          />
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
                onClick={() => history.push('/')}
                className="mt-4 flex-1"
              >
                Submit
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
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
            className="poke-img"
          />
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

  return (
    <div className="col-12 detail-pokemon">
      <Row className="my-5">
        <Col className="d-flex flex-column align-items-center" sm="4">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
            className="poke-img"
          />
          <button
            onClick={cathingPokemon}
            className="btn btn-primary btn-catch"
          >
            Catch
          </button>
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
