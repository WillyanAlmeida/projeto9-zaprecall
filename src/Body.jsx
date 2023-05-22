import styled from "styled-components"
import Questions from "./Questions"


export default function Body({img, setCount, count, footericon, setFootericon }){
    return(
        <>
        <Questionsbox  >
            <Questions setCount={setCount} img={img} count={count} footericon={footericon} setFootericon={setFootericon} />
        </Questionsbox>
        </>
    )
}

const Questionsbox = styled.div`
margin-top: 145px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 25px;
margin-bottom: 125px;
height: 115vh;
`;