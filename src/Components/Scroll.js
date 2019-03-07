import React from 'react';
import styled from 'styled-components';


const Scroll = (props) => {
  return (
    <Scr>
    	{props.children}
    </Scr>
  )
}

export default Scroll;

const Scr = styled.div `
overflown-y: "scroll";
border: 1em solid black;
height: 800px;
`;
