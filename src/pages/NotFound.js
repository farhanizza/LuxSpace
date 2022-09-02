import React from 'react';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/HomePage/Footer';
import Header from '../parts/Header';
import PageErrorMessage from '../parts/PageErrorMessage';
import useScrollToTop from '../helpers/hooks/userScrollToTop';

export default function NotFound() {
	useScrollToTop();
	return (
		<>
			<Header theme={'Black'} />
			<PageErrorMessage />
			<Sitemap />
			<Footer />
		</>
	);
}
