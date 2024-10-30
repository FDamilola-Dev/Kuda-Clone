import styled from "styled-components";
// import image from "../assets/images/download(6).svg";


const Hero = () => {
  return (
    <Container>
      <LeftHero>
        <Header>
          The money app for <br />
          Africans.
        </Header>
        <Paragraph>
          Make free transfers, enjoy cashless payment <br /> options and earn
          interest on your savings with <br />
          Kuda.
        </Paragraph>

        <Images>
          <img src="App store.png" alt="" />
          <img src="google.png" alt="" />
        </Images>
      </LeftHero>

      <RightHero>
        <img src="Capture hero.PNG" id="phone" alt=""/>
      </RightHero>
    </Container>
  )
};
export default Hero;

const Container = styled.div`
  display: flex;
  justify-content:space-around;
  width:80%;
  /* gap: 50px; */
  align-items: center;
  margin: auto ;
  height: 540px;

`;

const LeftHero = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const Header = styled.div`
  font-size: 50px;
  font-weight: 750;
  font-family: sans-serif;
  color: #40196d;
  padding: 0 0 20px 0;
`;

const Paragraph = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: sans-serif;
  padding: 0 0 20px 0;
`;

const Images = styled.div`
  img {
    height: 60px;
    width: 140px;
    color: white;
    /* padding: 20px; */
  }
`;
const RightHero = styled.div`
img {
  width: 500px;

}`

