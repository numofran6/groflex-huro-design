export const BasicCard = ({
	children,
	type,
	headingLeft,
	headingRight,
	isRaised,
	isPrimary,
	isSecondary,
	isInfo,
	isSuccess,
	isWarning,
	isDanger,
	isFlat,
	gutterBottom,
}) => {
	//

	const getCardType = () => {
		if (type === 's-card') {
			return 's-card';
		} else if (type === 'r-card') {
			return 'r-card';
		} else if (type === 'l-card') {
			return 'l-card';
		} else {
			return '';
		}
	};

	const getCardClasses = () => {
		const classes = [];

		// Elevation
		isRaised && classes.push('is-raised');
		isFlat && classes.push('is-flat');

		// Margin
		gutterBottom && classes.push('has-margin-bottom');

		// Colors
		isPrimary && classes.push('is-primary');
		isSecondary && classes.push('is-secondary');
		isInfo && classes.push('is-info');
		isSuccess && classes.push('is-success');
		isWarning && classes.push('is-warning');
		isDanger && classes.push('is-danger');

		return classes.join(' ');
	};

	return (
		<div className={`${getCardType()} ${getCardClasses()}`}>
			<div className="card-head">
				{/* Card Heading */}
				<div className="left">
					<h1 className="title">{headingLeft}</h1>
				</div>

				<h1 className="right">{headingRight}</h1>
			</div>

			<p className="card-inner">
				{/* Card Content */}
				{children}
			</p>
		</div>
	);
};
