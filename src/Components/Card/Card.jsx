import React, { useState, useEffect } from "react";
import styled from "styled-components";

let fraseInit = 0;
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const Card = () => {
  const [change, setChange] = useState([]);
  let colores = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  let background = Math.floor(Math.random() * colores.length);

  console.log(change);

  useEffect(() => {
    Data();
  }, []);

  const Data = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setChange(data.quotes[fraseInit]);
  };

  const handleChange = () => {
    fraseInit = multi();
    Data();
  };

  const multi = () => {
    return Math.floor(Math.random() * 99 + 1);
  };

  const DivCentral = styled.div`
    background: ${colores[background]};
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;

  const DivPrimary = styled.div`
    background: #fff;
    width: 50vw;
    height: 60vh;
    color: ${colores[background]};
    border-radius: 15px;
    font-family: "Lobster", cursive;
    font-size: 16px;
    margin-top: 20vh;
  `;

  const Info = styled.div`
    float: right;
    padding-right: 20px;
    margin-top: 20px;
  `;
  const Button = styled.button`
    float: right;
    padding: 10px;
    background: ${colores[background]};
    border: 0px;
    border-radius: 5px;
    color: #fff;
  `;

  const H1 = styled.h1`
    height: 200px;
    padding-left: 20px;
  `;

  return (
    <div>
      <DivCentral>
        <DivPrimary>
          <H1>"{change.quote}</H1>
          <Info>
            <p>-{change.author}</p>
            <div>
              <Button onClick={handleChange}>New quote</Button>
            </div>
          </Info>
        </DivPrimary>
      </DivCentral>
    </div>
  );
};

export default Card;
