import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header =() => {
    return (
        <Container>
        <Link to={"/"}>Home</Link>
        <Link>Shop</Link>
        <Link to={"/contact"}>Contact us</Link>
        <Link>FAQ</Link>
        </Container>
        
    )
};

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 40px; /* Add space around each link */

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  font-family:poppins;
  font-weight:600;
  width:100vw;
  left: 0; /* Position the header at the top-left corner */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 60px;
  z-index: 999; /* Set a high z-index to make sure the header appears over the page content */
  background-color:transparent; /* Set the background to transparent */
`;