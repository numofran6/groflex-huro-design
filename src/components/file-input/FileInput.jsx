import React from 'react';

export const FileInput = ({ label, description }) => {
	return (
		<div class="control">
			<div class="file is-boxed is-default">
				<label class="file-label">
					<input class="file-input" type="file" />
					<span class="file-cta">
						<span class="file-icon">
							<i class="fas fa-upload"></i>{' '}
							<span className="column">{label}</span>
						</span>
						<span class="file-label">{description}</span>
					</span>
				</label>
			</div>
		</div>
	);
};
