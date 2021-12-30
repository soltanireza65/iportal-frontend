interface NavigationItem {
	text: string;
	link: string;
}

export const routes: NavigationItem[] = [
	{
		text: 'قالب ها',
		link: '#templates'
	},
	{
		text: 'امکانات',
		link: '/options'
	},
	{
		text: 'تعرفه ها',
		link: '/rates'
	},
	{
		text: 'راهکار ها',
		link: '/guides'
	},
	{
		text: 'راهنما',
		link: '/help'
	},
	{
		text: 'شرکت',
		link: '/company'
	}
];
