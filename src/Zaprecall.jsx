import styled from "styled-components"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { useState } from "react"


export default function Zaprecall({img, iniciar }){
   
    return(
        <Zap iniciar={iniciar}>
            <Header img={img} />
            <Body img={img}/>
            <Footer img={img} />
        </Zap>
    )
}

const Zap = styled.div`
z-index: 9;
display: ${props=>props.iniciar === 'flex'?'none':'flex'};
flex-direction: column;
height: 125vh;
background-color: #FB6B6B;
margin-bottom: 70px;
`;