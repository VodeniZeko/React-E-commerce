import React, { Component } from 'react';
import { ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';



export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
			{value => {
			const {
				id,
				company,
				img,info,
				price,
				title,
				inCart
			    } = value.detailProduct;
			return (
				<div className =" container py-5">
				{/*title*/}
		            <div className='row'>
						<div className='col-10 mx-auto text-center
						text-slanted text-blue my-5'>
							<h1>{title}</h1>
						</div>
					</div>
				{/* end title*/}
			    {/* product info*/}
			    <div className='row'>
				    <div className='col-10 mx-auto col-md-6
				     my-3'>
					     <img src={img} className="img-fluid" alt='product' />
				    </div>
				{/*product text*/}
				    <div className='col-10 mx-auto col-md-6
				     my-3 text-capitalized'>
					     <h2>Model: {title}</h2>
                         <h4 className=" 
                         text-uppercase text-muted mt-4 mb-4">
                         made by: <span className='text-uppercase'>
                         {company} </span>
                         </h4>
                         <h4 className='text-blue'>
                         <strong>
                         	Price: <span>$ {price}</span>
                         </strong>
                         </h4>
                         <p className="text-capitalize mt-4 mb-0 font-weight-bold">
                         Some info about the product:
                         </p>
                         <p className=' mt-3 text-muted'>
                         {info}
                         </p>
      			{/*product text*/}
      			          <div>
	      			          <Link to ='/'>
	      			          <ButtonContainer>
	      			          Back to products
	      			          </ButtonContainer>
	      			          </Link>
	      			          <ButtonContainer
	      			          cart
	      			          disabled={inCart ? true : false}
	      			          onClick={()=> {
	      			          	value.addToCart(id);
	      			          	value.openModel(id);
	      			          }}
	      			          >
	      			          {inCart ? 'inCart': 'add to cart'}
	      			          </ButtonContainer>
      			          </div>
 
				    </div>
			    </div>
              </div>

				 
				)
			}}
			</ProductConsumer>
		);
	}
}
