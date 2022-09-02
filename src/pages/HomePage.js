import React from 'react';
import Clients from '../parts/Clients';
import Header from '../parts/Header';
import Hero from '../parts/HomePage/Hero';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import JustArrive from '../parts/HomePage/JustArrive';
import Footer from '../parts/HomePage/Footer';
import Sitemap from '../parts/Sitemap';
import useScrollAnchor from '../helpers/hooks/useScrollAnchor';
import useModalDOM from '../helpers/hooks/useModalDOM';
import useScrollToTop from '../helpers/hooks/userScrollToTop';

export default function HomePage() {
	useScrollAnchor();
	useModalDOM();
	useScrollToTop();
	return (
		<>
			<Header theme={'white'} position={'absolute'} />
			<Hero />
			<BrowseRoom />
			<JustArrive />
			<Clients />
			<Sitemap />
			<Footer />
		</>
	);
}
