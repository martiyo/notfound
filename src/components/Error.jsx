import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";

const Flash = styled.div`
  animation: 6s ${keyframes`${flash}`} infinite;
`;

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <img alt="img-404" src="img/sherlock.png" />
        </div>

        <div className="right">
          <div className="title">
            <Flash>
              <h1>404</h1>
            </Flash>
            <p>Page Not Found</p>
          </div>
          <p className="text">
            La pagina que estás buscando ha sido eliminada o no está disponible
            temporalmente.
          </p>
          <NavLink to="/">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
      <footer>
        <span>martiyo</span>
      </footer>
    </>
  );
};

export default Error;
