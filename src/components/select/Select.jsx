import React from 'react';
import { useState } from 'react';

export const Select = ({ options }) => {
	const [active, setActive] = useState(false);

	return (
		<div class="control" onClick={() => setActive(!active)}>
			<div class={`h-select ${active ? 'is-active' : ''}`}>
				<div class="select-box">
					<span>{options[0]}</span>
				</div>

				<div class="select-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-chevron-down"
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>

				<div class="select-drop has-slimscroll-sm">
					<div class="drop-inner">
						{options?.map((option) => (
							<div className="option-row" key={option}>
								<input type="radio" />
								<div className="option-meta">
									<span>{option}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
