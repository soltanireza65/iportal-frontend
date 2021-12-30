import { ReactChild } from 'react';
import Footer from './footer';
import Header from './header';

interface Props {
	children: ReactChild;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
