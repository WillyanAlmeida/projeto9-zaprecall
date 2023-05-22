import styled from 'styled-components'
import { useState } from 'react'


export default function Question({ x, img, setCount, count, footericon, setFootericon }) {
    let [tela1, setTela1] = useState('flex');
    let [tela2, setTela2] = useState('none');
    let [tela3, setTela3] = useState('none');
    let [tela4, setTela4] = useState('none');
    let [icon, setIcon] = useState();
    let [color, setColor] = useState('#000');
    let [datatest, setDatatest] = useState();

    function play() {
        setTela1('none');
        setTela2('flex');
        console.log('play');
    }

    function virar() {
        setTela2('none');
        setTela3('flex');
        console.log('virar');
    }

    function nao() {
        let x;
        setTela3('none');
        setTela4('flex');
        setIcon(img.erro);
        setColor('#FF3030');
        datatest = ('no-icon')
        setDatatest(datatest);
        x = img.erro;
        footericon.push({ datatest, img: x })
        setFootericon(footericon);
        count++;
        setCount(count);
    }

    function quase() {
        let x = '';
        setTela3('none');
        setTela4('flex');
        setIcon(img.quase);
        setColor('#FF922E');
        datatest = ('partial-icon');
        setDatatest(datatest);
        x = img.quase;
        footericon.push({ datatest, img: x })
        setFootericon(footericon);
        count++;
        setCount(count);
    }

    function zap() {
        let x;
        setTela3('none');
        setTela4('flex');
        setIcon(img.certo);
        setColor('#2FBE34');
        datatest = 'zap-icon';
        setDatatest(datatest);
        x = img.certo;
        footericon.push({ datatest, img: x })
        setFootericon(footericon);
        count++;
        setCount(count);
    }

    return (
        <Pergunta data-test="flashcard" tela1={tela1} >
            <Tela1 tela1={tela1}>
                <p data-test="flashcard-text" >Pergunta {x.id}</p>
                <img data-test="play-btn" onClick={play} src={img.play}></img>
            </Tela1>
            <Tela2 tela2={tela2}>
                <p data-test="flashcard-text" >{x.question}</p>
                <img data-test="turn-btn" onClick={virar} src={img.virar}></img>
            </Tela2>
            <Tela3 tela3={tela3}>
                <p data-test="flashcard-text" >{x.answer}</p>
                <div>
                    <button data-test="no-btn" className='nao' onClick={nao} >Não lembrei</button>
                    <button data-test="partial-btn" className='quase' onClick={quase} >Quase não lembrei</button>
                    <button data-test="zap-btn" className='zap' onClick={zap} >Zap!</button>
                </div>
            </Tela3>
            <Tela4 tela4={tela4} color={color}>
                <p data-test="flashcard-text" >Pergunta {x.id}</p>
                <img data-test={datatest} src={icon}></img>
            </Tela4>
        </Pergunta>
    )
}

const Tela1 = styled.div`
    width: 300px;
    height: 65px;
    display: ${props => props.tela1};
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
    display: ${props => props.tela2};
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
    display: ${props => props.tela3};
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
        color: #ffffff;
    }
    .nao{
        background: #FF3030;
        border:solid 1px #FF3030;
    }
    .quase{
        background: #FF922E;
        border:solid 1px #FF922E;
        }
    .zap{
        background: #2FBE34;
        border:solid 1px #2FBE34;
    }
`;
const Tela4 = styled.div`
    width: 300px;
    height: 65px;
    display: ${props => props.tela4};
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
        text-decoration: line-through;
        color: ${props => props.color};
        margin-left: 15px;
    }
    img{
        width: 23px;
        height: 23px;
        margin-right: 15px;
    }
`;