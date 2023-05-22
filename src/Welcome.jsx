import { useState } from "react";
import styled from "styled-components"



export default function Welcome({iniciar, setIniciar, img}) {
    
    function iniciarRecall ({iniciar}){
        console.log('clicou')
        setIniciar('none') ;        
    }
    return (
        <Welcomebox iniciar={iniciar}>
            <img src={img.logo} ></img>
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={iniciarRecall}>Iniciar Recall!</button>
        </Welcomebox>
    )
}

const Welcomebox = styled.div`
z-index: 10;
     gap: 20px;
    height : 100vh;
    display: ${props=> props.iniciar};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #fff;
    }
    img{
        width: 136px;
        height: 161px;
    }
    button{
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #D70900;

        width: 246px;
        height: 54px;

        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }

`;