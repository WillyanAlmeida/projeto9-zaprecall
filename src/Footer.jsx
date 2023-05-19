import styled from "styled-components"



export default function Footer(){
    return(
        <Foot>
            <h1>Concluidos</h1>
        </Foot>
    )
}


const Foot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #E5E5E5;
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`;