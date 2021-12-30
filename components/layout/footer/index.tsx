import { makeStyles } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '../routes';
import TarnamaLogo from 'public/images/footer/logo.png';
import BackImage from 'public/images/footer/footer.png';
import LeftImage from 'public/images/footer/left.png';
import RightImage from 'public/images/footer/right.png';

const useStyles = makeStyles(theme => ({
	image: {
		'& div': {
			[theme.breakpoints.up('lg')]: {
				width: '100% !important'
			}
		}
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className="relative text-white overflow-hidden">
			<div className="relative top-3 w-full">
				<div className={`w-full ${classes.image}`}>
					<Image src={BackImage} layout="fixed" />
				</div>
				<div className="absolute top-28 left-1/2 transform -translate-x-1/2">
					<Image src={TarnamaLogo} />
				</div>
				<div className="absolute left-20 bottom-8">
					<Image src={LeftImage} />
				</div>
				<div className="absolute transform translate-x-1/4 right-0 -bottom-60">
					<Image src={RightImage} />
				</div>
				<ul className="flex justify-center pt-8 min-h-max absolute top-0 left-1/2  transform -translate-x-1/2">
					{routes.map(route => (
						<Link href={route.link} key={route.link}>
							<li className="px-4 cursor-pointer">{route.text}</li>
						</Link>
					))}
				</ul>
			</div>
		</footer>
	);
}
