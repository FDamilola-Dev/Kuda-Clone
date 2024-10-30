import { TiArrowSortedDown } from "react-icons/ti";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LogoNav>
        <Logo>
          <img src="kuda neww.png" alt="" />
        </Logo>
        <Navigations>
          {/* <Link to= "/"/> */}
          <nav>
            <span>
              Personal
              <TiArrowSortedDown />
            </span>
            <span>
              Business <TiArrowSortedDown />
            </span>
            <span>
              Company <TiArrowSortedDown />
            </span>
            <span>
              Help <TiArrowSortedDown />
            </span>
          </nav>
        </Navigations>
      </LogoNav>
      <Buttons>
        <SignInBtn>Sign In</SignInBtn>
        <SignUpBtn>Join Kuda</SignUpBtn>
        <CountryBtn>
          <img src="download.jpeg" alt="" />
        </CountryBtn>
      </Buttons>
    </Container>
  );
};

export default Header;
const Body = styled.div `
background-color: white;
  
`

const Container = styled.div`
  display: flex;
  /* justify-content: space-around; */
  gap: 250px;
  justify-content: center;
  align-items: center;
  height:75px;
  width: 100%;
  /* background-color: black; */
  box-shadow :0 4px 13px rgba(0,0,0,.05) ;
  `

const LogoNav = styled.div`
  display: flex;
  gap: 90px;
  justify-content: center;
  align-items: center;`

const Logo = styled.div`
  img {
    width: 80px;
    padding-left: 10px;
    
  }
`;

const Navigations = styled.div`
  span {
    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    justify-content: center;
    align-items: center;
    margin-right: 3.5rem;
    color: #40196d;
    ;
  } 
`;

const Buttons = styled.div`
  display: flex;
  /* width: 30rem; */
`;

const SignInBtn = styled.button`
height: 50px;
border: none;
background-color: white;
color: #40196d;
font-size: 15px;
font-weight: 600;
`;



const SignUpBtn = styled.button`
height: 50px;
width: 9rem;
background-color: #40196d;
color: white;
font-size: 15px;
font-weight: 600;
border-radius: 10px;
margin-left: 30px;
border: transparent;
`;

const CountryBtn = styled.button`
border: none;
background-color: white;
img{
  height: 30px;
  margin-left: 15px;
  
}
`;
