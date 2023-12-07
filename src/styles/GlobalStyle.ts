import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
 }

 body,
 h1, h2 {
  margin: 0;
 }

 html {
   font-family: Verdana, Geneva, Tahoma, sans-serif;
 }

 ul {
  list-style: none;
  margin: 0;
  padding: 0;
 }

 img {
 max-width: 100%
 }

 a {
  text-decoration: none;
  color: inherit;
 }     

 button {
  border: none;
  background-color: transparent;
  font: inherit;
  cursor: grab;
 }
`;

export default GlobalStyle;
