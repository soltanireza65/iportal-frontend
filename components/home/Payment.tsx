import SeventhImage from 'public/images/main/seventh.png';
import Image from 'next/image';
import BackGrayImage from 'public/images/main/back_gray_2.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	image: {
		'& div': {
			[theme.breakpoints.up('lg')]: {
				width: '100% !important'
			}
		}
	}
}));
export default function Payment() {
	const classes = useStyles();

	return (
		<div className="relative pt-16">
			<div className={`absolute left-0 top-0 -z-1 w-full ${classes.image}`}>
				<Image src={BackGrayImage} layout="fixed" />
			</div>
			<div className="flex justify-center mb-5">
				<Image src={SeventhImage} />
			</div>
			<h2 className="text-center text-2xl mb-4">پرداخت</h2>
		</div>
	);
}
