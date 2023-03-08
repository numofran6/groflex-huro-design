import React from 'react';
import bankingImgLight from '../../assets/img/illustrations/apps/huro-banking-light.png';
import bankingImgDark from '../../assets/img/illustrations/apps/huro-banking-dark.png';
import logoLight from '../../assets/img/logos/logo/logo.svg';
import logoDark from '../../assets/img/logos/logo/logo-light.svg';
import { Link } from 'react-router-dom';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { Switch } from '../../components/switch/Switch';

export const SignUp = () => {
	return (
		<div className="app-wrapper">
			<div className="pageloader is-full"></div>
			<div className="infraloader is-full"></div>

			<div className="auth-wrapper">
				{/* Page Body */}
				{/* Wrapper */}
				<div className="auth-wrapper-inner columns is-gapless">
					{/* Form Section */}
					<div className="column is-5">
						<div className="hero is-fullheight is-white">
							<div className="hero-heading">
								<label className="dark-mode ml-auto">
									<input type="checkbox" checked="" onChange={() => {}} />
									<span></span>
								</label>

								<div className="auth-logo">
									<a href="/">
										<img
											className="top-logo light-image"
											src={logoLight}
											alt="Logo"
										/>
										<img
											className="top-logo dark-image"
											src={logoDark}
											alt="Logo"
										/>
									</a>
								</div>
							</div>

							<div className="hero-body">
								<div className="container">
									<div className="columns">
										<div className="column is-12">
											<div className="auth-content">
												<h2>Join Us Now.</h2>
												<p>Start by creating your account</p>
												<Link to={'/auth-login-2.html'}>
													I already have an account
												</Link>
											</div>

											<div className="auth-form-wrapper">
												{/* Login Form */}
												<form>
													<div className="login-form">
														<Input
															type={'text'}
															placeholder={'Username'}
															hasIcon
															icon={<i class="fas fa-user"></i>}
														/>
														<Input
															type={'text'}
															placeholder={'Email Address'}
															hasIcon
															icon={<i class="fas fa-envelope"></i>}
														/>
														<Input
															type={'text'}
															placeholder={'Password'}
															hasIcon
															icon={<i class="fas fa-lock"></i>}
														/>
														<Input
															type={'text'}
															placeholder={'Repeat Password'}
															hasIcon
															icon={<i class="fas fa-lock"></i>}
														/>

														<div className="setting-item">
															<Switch isPrimary />
															<div className="setting-meta">
																<span>Receive promotional offers</span>
															</div>
														</div>

														<div className="control login">
															<Button isPrimary isBold isRaised isFullWidth>
																Sign Up
															</Button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Image Section (hidden on mobile) */}
					<div className="column login-column is-7 is-hidden-mobile h-hidden-tablet-p hero-banner">
						<div className="hero login-hero is-fullheight is-app-grey">
							<div className="hero-body">
								<div className="columns">
									<div className="column is-10 is-offset-1">
										<img
											className="light-image has-light-shadow has-light-border"
											src={bankingImgLight}
											alt="Banking Image"
										/>

										<img
											className="dark-image has-light-shadow"
											src={bankingImgDark}
											alt="Banking Image"
										/>
									</div>
								</div>
							</div>

							<div className="hero-footer">
								<p className="has-text-centered"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
