import React, { useContext } from 'react';
import { Button } from '../../components/button/Button';
import { AdvancedCard } from '../../components/cards/AdvancedCard';
import { FileInput } from '../../components/file-input/FileInput';
import { InputAddons } from '../../components/input-addons/InputAddons';
import { Input } from '../../components/input/Input';
import { Select } from '../../components/select/Select';
import { TextArea } from '../../components/textarea/TextArea';
import { sidebarToggleContext } from '../../context/sidebarToggle';
import ApexChart from '../../utils/ApexChart';

export const AccountDetails = () => {
	const { active, handleActive } = useContext(sidebarToggleContext);

	return (
		<>
			<div className={`view-wrapper ${active ? 'is-pushed-full' : ''}`}>
				<div className="page-content-wrapper">
					<div className="page-content is-relative">
						<div className="page-title has-text-centered">
							{/* Sidebar Trigger */}
							<div className="huro-hamburger nav-trigger push-resize">
								<span className="menu-toggle has-chevron">
									<span
										className={`icon-box-toggle ${active ? 'active' : ''}`}
										onClick={handleActive}
									>
										<span className="rotate">
											<i className="icon-line-top"></i>
											<i className="icon-line-center"></i>
											<i className="icon-line-bottom"></i>
										</span>
									</span>
								</span>
							</div>

							{/* Title / Breadcrumb */}
							<div className="title-wrap">
								<nav
									className="breadcrumb has-bullet-separator"
									aria-label="breadcrumbs"
								>
									<ul>
										<li>
											<a href="#">
												<span>Home</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span>Account Setings</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span>Account Details</span>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>

						<div className="page-content-inner">
							<div className="tabs-wrapper">
								<div className="tabs-inner">
									<div className="tabs">
										<ul>
											<li data-tab="account-details-tab" className="is-active">
												<a>Account Details</a>
											</li>
											<li data-tab="projects-tab">
												<a>Preferences</a>
											</li>
										</ul>
									</div>
								</div>

								<div id="account-details-tab" className="tab-content is-active">
									<div className="columns is-multiline">
										<div className="column is-7">
											{/* PROFILE INFO */}
											<AdvancedCard
												type={'s-card'}
												footer
												footerContentRight={<Button isSuccess>Save</Button>}
											>
												<h2 className="title is-6 is-bold">Profile Info</h2>

												<>
													<div className="columns is-multiline m-b-5">
														<div className="column is-6">
															<div className="field">
																<label>Registered E-mail Address</label>
																<InputAddons
																	type={'text'}
																	placeholder={'Enter Details'}
																	right={
																		<i
																			className="fas fa-pen"
																			style={{ color: '#06d6a0' }}
																		></i>
																	}
																/>
															</div>
														</div>

														<div className="column is-6">
															<div className="field">
																<label>Phone Number</label>
																<InputAddons
																	type={'text'}
																	left={'+91'}
																	placeholder={'Enter Details'}
																/>
															</div>
														</div>
													</div>

													<div className="columns is-multiline">
														<div className="column is-6">
															<Input
																type={'text'}
																label={'First Name'}
																placeholder={'Enter Detials'}
															/>
														</div>

														<div className="column is-6">
															<Input
																type={'text'}
																label="Last Name"
																placeholder={'Enter Detials'}
															/>
														</div>
													</div>
												</>
											</AdvancedCard>

											<div className="m-t-15" />

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

												<>
													<div className="columns is-multiline m-b-5">
														<div className="column is-6">
															<Input
																type={'text'}
																label={'Company Name *'}
																placeholder="Enter Details"
																isError
																helpText="Should not be empty"
															/>
														</div>

														<div className="column is-6">
															<div className="field">
																<label>Phone Number</label>
																<InputAddons
																	type={'text'}
																	left={'+91'}
																	placeholder={'Enter Details'}
																/>
															</div>
														</div>
													</div>

													<div className="columns is-multiline m-b-5">
														<div className="column is-6">
															<div className="field">
																<label>Company Logo</label>
																<FileInput
																	label={'Upload logo'}
																	description={
																		'(Upload jpeg/png image upto 2mb size)'
																	}
																/>
															</div>
														</div>

														<div className="column is-6">
															<div className="field">
																<label>Address</label>
																<TextArea
																	rows={2}
																	placeholder="Enter Details"
																/>
															</div>
														</div>
													</div>

													<div className="columns is-multiline m-b-5">
														<div className="column is-6">
															<div className="field">
																<label>Country *</label>
																<Select options={['India']} />
															</div>
														</div>

														<div className="column is-6">
															<div className="field">
																<label>State *</label>
																<Select options={['Karnataka']} />
															</div>
														</div>
													</div>

													<div className="columns is-multiline m-b-5">
														<div className="column is-6">
															<Input
																type={'text'}
																label={'E-mail Address'}
																placeholder={'Enter Detials'}
															/>
														</div>

														<div className="column is-6">
															<div className="field">
																<label>GST Type *</label>
																<Select options={['Registered']} />
															</div>
														</div>
													</div>

													<div className="columns is-multiline">
														<div className="column is-6">
															<Input
																type={'text'}
																label={'GST'}
																placeholder={'E.g.,07AAAA0000AZ6'}
															/>
														</div>

														<div className="column is-6">
															<Input
																type={'text'}
																label={'CIN'}
																placeholder={'E.g.,U 31909 WB 2020 PTC 247113'}
															/>
														</div>
													</div>
												</>
											</AdvancedCard>
										</div>

										<div className="column is-5">
											{/* KYC FORM */}
											<AdvancedCard
												type={'s-card'}
												footer
												footerContentRight={
													<Button isSuccess>View Form</Button>
												}
											>
												<div className="columns is-multiline">
													<div className="column is-8">
														<h2 className="title is-6 is-bold">KYC Form</h2>

														<p>
															Complete your KYC documentation and start
															accepting payments
														</p>
													</div>

													<div className="column is-4">
														<ApexChart />
													</div>
												</div>
											</AdvancedCard>

											<div className="m-t-15" />

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
												<div>
													<h2 className="title is-6 is-bold">Your Plan</h2>

													<p>
														Current Plan -{' '}
														<span className="is-weight-900">
															Basic Free Plan
														</span>{' '}
														(renews automatically)
													</p>

													<div className="m-t-5 m-b-5">
														<progress
															className="progress is-info"
															value="50"
															max="100"
														>
															50%
														</progress>
													</div>

													<div className="widget-toolbar">
														<p className="left">Starts on 10.01.2023</p>
														<p className="right">Ends on 10.01.2023</p>
													</div>
												</div>
											</AdvancedCard>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
