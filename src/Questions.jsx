import styled from 'styled-components'
import data from './data'




export default function Questions(){
    return(
        data.map((x)=>( <Pergunta>Pergunta {x.indice}</Pergunta>))
        
    )
}

const Pergunta = styled.div`
width: 300px;
height: 65px;

background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
`;