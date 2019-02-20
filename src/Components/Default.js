import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



export default class Default extends Component {
	render() {
		return (
<Lost>
	<div className=' page-wrap d-flex flex-row align-items-center py-5 my-5'>
		<div className='container'>
			<div className='row justify-content-center'>
				<div className="col-md-12 text-center" >
				 
					<span className="bg mb-4 display-1 d-block">404</span>
					<h3 className="h">Something went wrong</h3>
				 
							 <div className=' py-5'>
							 <div className='imgC py-5'>
							    <img className="image" alt='spaceman' src="https://s-i.huffpost.com/gen/4524066/images/o-ASTRONAUT-facebook.jpg"/>
						     </div>
						     </div>	
		           
				</div>
				<Link to= '/'>
				<h5 className='home'>Back to Home</h5>
	            </Link>   
			</div>
		 </div>
	</div>
</Lost>

		);
	}
}

const Lost = styled.div `
  background: black;
 
.bg {
	color: white;
}
.h {
	color: white;
}

.home {
	color: white;
}

 .image {
  animation:spin 10s linear infinite;
  width: 25em;
  height: 15em;
  border-radius:13em;
  
  

}
 @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
 @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
 @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

`;