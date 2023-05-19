import styled from "styled-components"


export default function Header({ logo}) {
    return (
        <Headx>
            <img src={logo} ></img>
            <h1>ZapRecall</h1>

        </Headx>
    )
}

const Headx = styled.div`
padding-left: 59px;
padding-top: 12px;
position: fixed;
top: 0;
display: flex;
align-items: center;
gap: 20px;

img{
    
    width: 52px;
    height: 60px;
}
h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;

    color: #FFFFFF;

    transform: rotate(0.58deg);
}
`;
