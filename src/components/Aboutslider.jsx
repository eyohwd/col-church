import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from '../data';
import { aboutItems } from '../data';
import { mobile } from "../responsive";
//import {mobile} from "../responsive"
//import { Link } from "react-router-dom";



const Container = styled.div`
width; 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
background-color: black;
${mobile({alignItems: "normal", height: "36vh", with:"50%"})}
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
${mobile({alignItems: "normal", height: "80vh",})}
`
const ImgContainer= styled.div`
height: 100%;
flex: 2.7;
display: flex;
// align-items: center;
justify-content: center;
${mobile({alignItems: "normal", height: "50%", })}
`
const Image = styled.img`
height: 90%;
width: 80%
${mobile({alignItems: "normal", height: "60%", })}
`
const InfoContainer = styled.div`
flex: 1;
// height: 100%;
margin-bottom: 180px;
display: flex;
flex-direction: column;
padding: 10px 70px 20px 30px;
justify-content: center;
align-items: center;
// background-color: rgba(0, 0, 0, 0.278);
`
const Title = styled.h1`
font-size: 50px;
text-align: center;
color: #27213c;
`
const Desc = styled.p`
margin: 20px 0px;
font-size: 20px;
font-weight: 500px;
letter-spacing: 3px;
text-align: center;
color: white;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
color: white;
`

const Aboutslider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime =5000;
  
    
    
  
    useEffect(() => {
      setSlideIndex(0)
    }, [])
  
    useEffect(() => {
      if (autoScroll) {
        const auto = ()=> {
          slideInterval = setInterval(handleClick, intervalTime)
         }
         auto();
      }
      return () => clearInterval(slideInterval)
    }, [slideIndex, autoScroll, slideInterval])
  
  
  
    const handleClick = (direction)=>{
      if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
      }
  
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlined/>
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {aboutItems.map((item)=>(<Slide key={item.id} bg={item.bg}>
            <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            {/*<InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                
                <Button>{item.text}</Button>
                
            </InfoContainer>*/}
            </Slide>))}
            
    
          </Wrapper>
          <Arrow direction= "right" onClick={()=>handleClick("right")}>
          <ArrowRightOutlined/>
          </Arrow>
        </Container>
      );
}

export default Aboutslider;
