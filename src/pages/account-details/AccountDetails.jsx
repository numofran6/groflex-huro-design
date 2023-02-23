import React from 'react';
import { Button } from '../../components/button/Button';
import { AdvancedCard } from '../../components/cards/AdvancedCard';
import { FileInput } from '../../components/file-input/FileInput';
import { InputAddons } from '../../components/input-addons/InputAddons';
import { Input } from '../../components/input/Input';
import { Select } from '../../components/select/Select';
import { TextArea } from '../../components/textarea/TextArea';

export const AccountDetails = () => {
	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
					columnGap: '1.5rem',
				}}
			>
				<div style={{ gridColumn: 'span 2 / span 2' }}>
					{/* PROFILE INFO */}
					<AdvancedCard
						type={'s-card'}
						footer
						footerContentRight={<Button isSuccess>Save</Button>}
					>
						<h2 className="title is-6 is-bold">Profile Info</h2>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
								columnGap: '2rem',
							}}
						>
							<div>
								<div className="field">
									<label>Registered E-mail Address</label>
									<Input placeholder={'Enter Detials'} />
								</div>

								<div className="field">
									<label>First Name</label>
									<Input placeholder={'Enter Detials'} />
								</div>
							</div>

							<div>
								<div className="field">
									<label>Phone Number</label>
									<InputAddons />
								</div>

								<div className="field">
									<label>Last Name</label>
									<Input placeholder={'Enter Detials'} />
								</div>
							</div>
						</div>
					</AdvancedCard>

					<div style={{ marginTop: '1.5rem' }} />

					{/* COMPANY INFO */}
					<AdvancedCard
						type={'s-card'}
						footer
						footerContentRight={<Button isSuccess>Save</Button>}
					>
						<h2 className="title is-6  is-bold">Company Info</h2>
						<p className="subtitle is-6">
							This details will appear in your invoices and expenses
						</p>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
								columnGap: '2rem',
							}}
						>
							<div>
								<div className="field">
									<label>Company Name *</label>
									<Input placeholder="Enter Details" />
								</div>

								<div className="field">
									<label>Company Logo</label>
									<FileInput
										label={'Upload logo'}
										description={'(Upload jpeg/png image upto 2mb size)'}
									/>
								</div>

								<div className="field">
									<label>Country *</label>
									<Select options={['India']} />
								</div>

								<div className="field">
									<label>E-mail Address</label>
									<Input placeholder={'Enter Detials'} />
								</div>

								<div className="field">
									<label>GST</label>
									<Input placeholder={'E.g.,07AAAA0000AZ6'} />
								</div>
							</div>

							<div>
								<div className="field">
									<label>Phone Number</label>
									<InputAddons />
								</div>

								<div className="field">
									<label>Address</label>
									<TextArea rows={2} placeholder="Enter Details" />
								</div>

								<div className="field">
									<label>State *</label>
									<Select options={['Karnataka']} />
								</div>

								<div className="field">
									<label>GST Type *</label>
									<Select options={['Registered']} />
								</div>

								<div className="field">
									<label>CIN</label>
									<Input placeholder={'E.g.,U 31909 WB 2020 PTC 247113'} />
								</div>
							</div>
						</div>
					</AdvancedCard>
				</div>

				<div>
					{/* KYC FORM */}
					<AdvancedCard
						type={'s-card'}
						footer
						footerContentRight={<Button isSuccess>View Form</Button>}
					>
						<h2 className="title is-6 is-bold">KYC Form</h2>

						<p>Complete your KYC documentation and start accepting payments</p>
					</AdvancedCard>

					<div style={{ marginTop: '1.5rem' }} />

					{/* YOUR PLAN */}
					<AdvancedCard
						type={'s-card'}
						footer
						footerContentRight={
							<Button isDisabled isLight>
								Upgrade Plans
							</Button>
						}
					>
						<h2 className="title is-6 is-bold">Your Plan</h2>

						<p>Current Plan - Basic Free Plan (renews automatically)</p>
					</AdvancedCard>
				</div>
			</div>
		</>
	);
};
