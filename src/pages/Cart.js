import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/HomePage/Footer';
import ShoppingCart from '../parts/Cart/ShoppingCart';
import Document from '../parts/Document';
import ShippingCart from '../parts/Cart/ShippingCart';
export default function Cart() {
	return (
		<Document>
			<Header theme="black" />

			<BreadCrumb
				list={[
					{ url: '/', name: 'Home' },
					{ url: '/cart', name: 'Shopping Cart' },
				]}
			/>

			<section className="md:py-16">
				<div className="container mx-auto px-4">
					<div className="flex -mx-4 flex-wrap">
						<ShoppingCart />
						<ShippingCart />
					</div>
				</div>
			</section>

			<Sitemap />
			<Footer />
		</Document>
	);
}
