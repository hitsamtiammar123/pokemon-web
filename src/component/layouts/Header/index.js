import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from 'reactstrap';
import './styles.scss';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">Pokemon</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText
            onClick={() => console.log('clicked hehe')}
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
