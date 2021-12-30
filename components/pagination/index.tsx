interface Props {
	page: number;
	totalPages: number;
	onChange: (newPage: number) => void;
}

export default function Pagination({ onChange, page, totalPages }: Props) {
	const onClick = (newPage: number) => {
		onChange(newPage);
	};

	return (
		<div className="flex">
			{Array.from(Array(totalPages)).map((_, index) => (
				<div
					key={index}
					onClick={() => onClick(index)}
					className="px-2 py-4 cursor-pointer"
				>
					<div
						className={`h-3 rounded-full transform transition-all ${
							page === index ? 'bg-red-500 w-6' : 'bg-gray-300 w-3'
						}`}
					></div>
				</div>
			))}
		</div>
	);
}
