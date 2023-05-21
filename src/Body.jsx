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
margin-top: 105px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 25px;
margin-bottom: 75px;
`;