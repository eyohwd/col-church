import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
height: 60vh;
background-color:  #d5bbb1;;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 60px;
margin-bottom: 20px;
`;
const Desc = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
   ${mobile({textAlign: "center"})}

`;
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgray;
   ${mobile({width: "80%"})}
   
`;
const Input = styled.input`
   border: none;
   flex: 8;
   padding-left: 20px;
   outline: none;
   color: black;
`;
const Button = styled.button`
   flex: 1;
   border: none;
   background-color: #27213c;
   color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Get timely update of our church programs.</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
