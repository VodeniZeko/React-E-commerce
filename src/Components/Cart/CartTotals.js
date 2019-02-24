import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PayPalbutton from './PayPalbutton';



export default function CartTotals ({value,history}) {
   const {cartSubTotal,cartTotal, cartTax,clearCart } = value;
		return (

			<React.Fragment>
				<div className='container'>
					<div className='row'>
						<div className='col-10 mt-3 mb-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
								<Link to= '/'>
								<button className='btn btn-outline-danger text-uppercase mb-3 px-5'
								type='button'
								onClick={() => clearCart()}
								>
								clear cart
								</button>
								</Link>
							 <h3>
	                            <span className='font-italic'>subtotal: </span>
	                            <strong>$ {cartSubTotal}</strong>
							 </h3>
							 <h3>
	                            <span className='font-italic'>Tax: </span>
	                             <strong>$ {cartTax}</strong>
	                          </h3>
							  <h3>
							    <hr />
							    <span className='font-italic'>Total: </span>
	                            <strong>$ {cartTotal}</strong>
	                         </h3>
	                         <PayPalbutton 
	                         total={cartTotal} 
	                         clearCart={clearCart} 
	                         history={history} 
	                         />

						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

