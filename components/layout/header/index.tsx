import { Button, Container, makeStyles } from '@material-ui/core';
import { routes } from '../routes';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
	navLink: {
		'&:not(:last-child)': {
			borderRight: '2px solid #1e254c'
		}
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<header className="mt-5 text-white">
			<Container>
				<div className="flex justify-center relative">
					<div className="absolute left-0">
						<Button variant="contained" color="secondary" className="ml-4">
							ورود
						</Button>
						<Button color="inherit">ثبت نام</Button>
					</div>
					<ul className="flex">
						{routes.map(route => (
							<Link href={route.link} key={route.text}>
								<li className={`px-4 cursor-pointer ${classes.navLink}`}>
									{route.text}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</Container>
		</header>
	);
}
