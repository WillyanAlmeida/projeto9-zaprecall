import styled from 'styled-components'
import data from './data'
import { useState } from 'react'
import Question from './Question'



export default function Questions({ img, setCount, count, footericon, setFootericon }) {


   
    return (
        data.map((x) => (
            <Box>
               <Question x={x} img={img} setCount={setCount} count={count} footericon={footericon} setFootericon={setFootericon}/>
            </Box>))

    )

}

const Box = styled.div`
    margin-top: 1px;  
`;