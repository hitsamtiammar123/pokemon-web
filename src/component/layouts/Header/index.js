import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarText } from 'reactstrap';
import './styles.scss';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand>
          <Link to="/">Pokemon</Link>
        </NavbarBrand> */}
        <Link className="navbar-brand" to="/">
          Pokemon
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText
            onClick={() => history.push('/mypokemon')}
            className="my-pokemon"
          >
            My Pokemon List
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
