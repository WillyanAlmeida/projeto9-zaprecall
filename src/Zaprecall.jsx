import styled from "styled-components"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { useState } from "react"


export default function Zaprecall({logo, iniciar }){
   
    return(
        <Zap iniciar={iniciar}>
            <Header logo={logo} />
            <Body />
            <Footer/>
        </Zap>
    )
}

const Zap = styled.div`
z-index: 9;
display: ${props=>props.iniciar === 'flex'?'none':'flex'};
flex-direction: column;
height: 100vh;
background-color: #FB6B6B;
`;