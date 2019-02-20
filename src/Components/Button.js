import styled from 'styled-components';

export const ButtonContainer = styled.button`
ar(--mainYellow)':'var(--lightBlue)}
text-transform: capitalize;
font-size: 1.2em;
background: transparent;
color: var(--lightBlue);
color: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
border:0.10em solid var(--lightBlue);
border-color: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
padding: 0.2em 0.5em;
border-radius: 0.5em;
cursor: pointer;
margin: 0.4em;
transition: all .5s ease-in-out;
&:hover {	
  background:${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};;
  color: var(--mainDark);
}
&:focus{
  outline:none;
}
`;

