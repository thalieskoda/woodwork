import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --color-main-background: #fff;
    --color-secondary: #edf0f2;
    --color-accent: #8A9A5B;
    --font-heading: 'Ubuntu', Arial, Helvetica, sans-serif;
    --font-body: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  }

  /* Reset styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set default font family, size, and line height */
  body {
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.5;
    margin: 0px;
    background-color: red;
    padding: 0px;
  }

  /* Set background color for entire page */
  body {
    background-color: var(--color-main-background);
  }
p{
  font-family: philosopher;
    font-weight:100;
    font-size:16px;
    opacity:0.5;
    padding-bottom:10px;}
  /* Headings */
  h1 ,
  h2 {
    font-family: var(--font-heading);
    font-weight: bold;
    line-height: 1.2;
    color: var(--color-accent);
  },
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    font-weight: bold;
    line-height: 1.2;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  /* Links */
  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #444444;
  }

  /* Buttons */
  button {
    background-color: var(--color-accent);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 50px;
    transition: all 0.3s ease;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color:#B7CD78 ;
  }

  /* Navigation */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    margin-right: 24px;
  }

  nav a {
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default GlobalStyles;
