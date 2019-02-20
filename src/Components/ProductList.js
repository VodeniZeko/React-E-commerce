import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import styled from 'styled-components';
import { Searchbar } from './Searchbar';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	render() {
		return (
			
	<React.Fragment>
	 <div className='py-5'>
		  <div className='container'>
	        <Title name="Our" title="Products"/>
	            
	          <Searchbar className='d-flex justify-content-center h-100'>
	            <div className='dv'>
		          <div className='Sc'>
		             
			            <input  className="inpt" type="search" placeholder="Search..." />
		                <span  className="search_icon"><i className="fas fa-search"></i></span>
		                
	              </div>
               </div>
	          </Searchbar> 
            
            <div className ='row' >
		         <ProductConsumer> 
		           {value => {
		         	 return value.products.map(product =>{
		         	 	return <Product key={product.id} 
		         	 	product={product}  />;
		         	 });           
		           }}
		         </ProductConsumer>
			  </div>
		  </div>
	 </div>
	</React.Fragment>
	 
			
		);
	}
}



