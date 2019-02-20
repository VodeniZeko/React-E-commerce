import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import Empty from './Empty';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';


export default class Cart extends Component {
	render() {
		return (
			<section>
			<ProductConsumer>
			{value => {
				const{cart} = value;
				if (cart.length >0) {
					return(
						<React.Fragment>
						<div className=" title container py-5">
						<Title name='your' title='cart'/>
						</div>
				        <CartColumns/>
				        <CartList value={value} />
				        <CartTotals value={value} />
				        </React.Fragment>
						);
				} else {
					return  <Empty />;
					
				}
			}}
            </ProductConsumer>
			</section>
		);
	}
}