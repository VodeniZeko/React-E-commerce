
import styled from 'styled-components';


export const Searchbar = styled.label`
     
     display:flex;
     justify-content:center;

   

    .dv {
     padding-top: 3em;
     height: 10em;
     
  }

    .Sc {
     display:flex;
     justify-content:center; 
     margin-top:auto;
     margin-bottom: auto;
 }

   .inpt {
    outline: 0;
    border: 0;
    background: none;
    width: 0;
    height: 2.8em;
    caret-color:transparent;
    font-family: 'Gloria Hallelujah', cursive;
    transition: width 0.5s linear;
 }   
   
   .search_icon {
    color: var(--mainWhite);
    width: 3.5em;
    height: 3.5em;
    justify-content:center;
    display:flex;
    align-items:center;
    margin: 0;
    background: var(--mainBlue);
    border-radius: 2em; 
    border:0.10em solid var(--lightBlue);
 
}
   
   .Sc:hover .inpt {

    padding: 0 10px;
    width: 18.75em;
    transition: width 0.5s linear;
    background: none;
    caret-color: var(--mainBlack);
    text-transform: capitalize;
    font-size: 1.2em;
    font-family: 'Gloria Hallelujah', cursive;
    font-weight: bold;
    cursor:pointer;
    


}
    .Sc:hover .search_icon {
  	color: var(--mainBlack);
  	background: var(--lightBlue);
    cursor:pointer;

     
 }
 
`;

