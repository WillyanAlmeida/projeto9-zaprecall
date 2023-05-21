import styled from 'styled-components'
import data from './data'
import { useState } from 'react'


export default function Question({x, img}) {
    let [tela1, setTela1] = useState('flex')
    let [tela2, setTela2] = useState('none')
    let [tela3, setTela3] = useState('none')

    function play(){
        setTela1('none');
        setTela2('flex');
        console.log('play')
    }

    function virar(){
        setTela2('none');
        setTela3('flex');
        console.log('virar')
    }


    return (
        <Pergunta tela1={tela1} >
            <Tela1 tela1={tela1}>
                <p>Pergunta {x.id}</p>
                <img onClick={play} src={img.play}></img>
            </Tela1>
            <Tela2 tela2={tela2}>
                <p>{x.question}</p>
                <img onClick={virar} src={img.virar}></img>
            </Tela2>
            <Tela3 tela3={tela3}>
            <p>{x.answer}</p>
                <div>
               <button>Não lembrei</button>
               <button>Quase não lembrei</button>
               <button>Zap!</button>
                </div>
            </Tela3>
        </Pergunta>
    )
}

const Tela1 = styled.div`
   
    width: 300px;
    height: 65px;
    display: ${props=> props.tela1};
    align-items: center;
    justify-content: space-between;

    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    p{    
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-left: 15px;
}

img{
    width: 20px;
    height: 23px;
    margin-right: 15px;
}
`;

const Pergunta = styled.div`

`;



const Tela2 = styled.div`
    width: 300px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: ${props=> props.tela2};
    
    justify-content: space-between;
    background-color: #FFFFD4;
   
    p{    
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
img{
    margin-top: 100px;
    bottom:0;
    width: 20px;
    height: 23px;
    margin-right: 15px;
}
`;

const Tela3 = styled.div`
    width: 300px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: ${props=> props.tela3};
    flex-direction:column;
    justify-content: space-between;
    background-color: #FFFFD4;
   
    p{    
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
img{
    margin-top: 100px;
    bottom:0;
    width: 20px;
    height: 23px;
    margin-right: 15px;
}
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    padding-left: 17px;
    padding-right: 12px;
    padding-bottom: 10px;
}
button{
    width: 85px;
    height: 37px;
    border-radius: 5px;
    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;

}
`;