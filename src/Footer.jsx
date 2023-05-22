import styled from "styled-components"
import data from './data'



export default function Footer({ count, footericon }) {
    return (
        <Foot>
            <h1 data-test="footer">{count}/{data.length} Concluídos</h1>
            <span>
                <Icons footericon={footericon} />
            </span>
        </Foot>
    )
}
function Icons({ footericon }) {
    return (
        footericon.map((x) => <img data-test={x.datatest} src={x.img}></img>)
    )
}
const Foot = styled.div`
    z-index: 9;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 70px;
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    box-shadow: 0px -4px 6px 0px #0000000D;
    

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 10px;
        color: #333333;
    }
    img{
    width: 23px;
    height: 23px;
    margin-right: 5px;
}

`;