import styled from 'styled-components'
import data from './data'
import { useState } from 'react'



export default function Questions({ img }) {
let [tela1, setTela1] = useState('flex')
let [tela2, setTela2] = useState('none')

    function play(){
        setTela1('none');
        setTela2('flex');
        console.log('play')
    }

    function virar(){
        console.log('virar')
    }

    return (
        data.map((x) => (
            <Pergunta>
                <Tela1 tela1={tela1}>
                    <p>Pergunta {x.id}</p>
                    <img onClick={play} src={img.play}></img>
                </Tela1>
                <Tela2 tela2={tela2}>
                <p>{x.question}</p>
                <img onClick={virar} src={img.virar}></img>
                </Tela2>
            </Pergunta>))

    )

}

const Pergunta = styled.div`
z-index: 2;
width: 300px;
height: 65px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;

img{
    width: 20px;
    height: 23px;
}
`;

const Tela1 = styled.div`
    width: 100%;
    display: ${props=> props.tela1};
    align-items: center;
    justify-content: space-between;
   
    p{    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
`;
const Tela2 = styled.div`
    width: 299px;
    height: 131px;

    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: ${props=> props.tela2};
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFD4;
   
    p{    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
`;