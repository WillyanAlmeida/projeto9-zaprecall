import styled from "styled-components"
import Questions from "./Questions"


export default function Body(){
    return(
        <>
        <Questionsbox  >
            <Questions />
        </Questionsbox>
        </>
    )
}

const Questionsbox = styled.div`
margin-top: 105px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 25px;
`;