import styled from "styled-components"
import Questions from "./Questions"


export default function Body({img}){
    return(
        <>
        <Questionsbox  >
            <Questions img={img} />
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