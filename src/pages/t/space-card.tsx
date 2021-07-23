import { Formik } from 'formik';
import React from 'react';

import { FormCheckInput, FormGroup, FormInput, FormLongInput } from '../../components/FormGroups';
import { PageSegment } from '../../components/PageSegment';
import { Meta } from '../../layout/Meta';
import { TemplatePage } from '../../templates/TemplatePage';
import { Globals } from '../../utils/AppConfig';

const templateInfo = {
	title: 'Space Card',
	author: 'Camy',
	authorUrl: 'https://toyhou.se/Camy',
	description: '',
	url: 'https://toyhou.se/11665847.-f2u-space-card',
	policyUrl: 'https://toyhou.se/11665847.-f2u-space-card',
};

const Template = () => {
	return (
		<TemplatePage
			meta={
				<Meta
					title={
						templateInfo.title + ' by ' + templateInfo.author ||
						'Toyhouse Code Template'
					}
					description={templateInfo.description}
				/>
			}
			templateInfo={templateInfo}
		>
			<Formik
				initialValues={{
					profile: {
						username: 'USERNAME',
						subheader: 'adjective adjective adjective',
					},
					socials: {
						deviantArt: {
							show: true,
							link: 'https://toyhou.se/',
						},
						furAffinity: {
							show: true,
							link: 'https://toyhou.se/',
						},
						twitter: {
							show: true,
							link: 'https://toyhou.se/',
						},
						tumblr: {
							show: true,
							link: 'https://toyhou.se/',
						},
						instagram: {
							show: true,
							link: 'https://toyhou.se/',
						},
					},
					bio: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
					playing: 'Playing: Never Gonna Give You Up - Rick Astley',
					commissions: {
						status: 'Open',
						clickable: true,
						hidden: false,
						url: 'https://toyhou.se/',
					},
					requests: 'Maybe',
					trades: 'Closed',
					images: {
						foreground:
							'https://cdn.discordapp.com/attachments/772327079718682654/858311894205333514/spacecode_moon_and_fancy_avi.png',
						background:
							'https://cdn.discordapp.com/attachments/772327079718682654/858428596750385182/spacecode_stars.png',
						base: 'https://cdn.discordapp.com/attachments/772327079718682654/858159816043135006/spacecode_bg.png',
						profile: '/img/placeholder-131.png',
					},
				}}
				onSubmit={() => {}}
			>
				{({ values }) => (
					<>
						<div className="tw-flex tw-flex-col lg:tw-flex-row tw-px-4 tw-mx-auto">
							<div className="tw-mr-0 lg:tw-mr-4 lg:tw-w-1/3 tw-prose tw-prose-indigo">
								<h2>Form</h2>
								<FormGroup title="Profile">
									<FormInput for="profile.username" />
									<FormInput for="profile.subheader" />
									<FormInput for="images.profile" />
									<p className="tw-bg-red-100 tw-p-3 tw-rounded-md tw-shadow-md">
										Warning: Profile image <b>MUST</b> be
										131x131 pixels.
									</p>
									<FormLongInput for="bio" />
								</FormGroup>
								<FormGroup title="Socials">
									<FormInput
										for="socials.deviantArt.link"
										showToggle="socials.deviantArt.show"
									/>
									<FormInput
										for="socials.furAffinity.link"
										showToggle="socials.furAffinity.show"
									/>
									<FormInput
										for="socials.twitter.link"
										showToggle="socials.twitter.show"
									/>
									<FormInput
										for="socials.tumblr.link"
										showToggle="socials.tumblr.show"
									/>
									<FormInput
										for="socials.instagram.link"
										showToggle="socials.instagram.show"
									/>
								</FormGroup>
								<FormGroup title="Commissions">
									<FormCheckInput for="commissions.hidden" />
									<FormInput for="commissions.status" />
									<FormInput for="commissions.url" />
									<FormCheckInput for="commissions.clickable" />
									<FormInput for="requests" />
									<FormInput for="trades" />
								</FormGroup>
								<FormGroup title="Misc.">
									<FormInput for="playing" />
								</FormGroup>
							</div>
							<div>
								<div className="tw-prose">
									<h2>Preview</h2>
								</div>
								<div className="tw-p-4 tw-bg-gray-900 tw-rounded-xl tw-shadow-lg tw-overflow-x-scroll tw-overflow-y-auto">
									<div className="tw-prose tw-text-gray-200 tw-prose-sm tw-rounded-lg tw-bg-gray-800 tw-p-3 tw-mb-4">
										<p>
											Images may render weird or be placed
											wrongly within their container when
											changed.
										</p>
										<p>
											Until Darkmode becomes (fully)
											supported by this site, Camy's
											template is going to get a bit of a
											special treatment since I enjoy it
											with a darker background.
										</p>
									</div>
									{/* ### START ### */}
									<div>
										<div className="container">
											<div
												style={{
													margin: '0 auto',
													background: `url("${values.images.background}") no-repeat`,
													width: 600,
													height: 505,
													color: '#fff',
												}}
											>
												<div
													style={{
														backgroundImage: `url("${values.images.base}")`,
														backgroundRepeat:
															'no-repeat',
														width: 600,
														height: 500,
														position: 'relative',
													}}
												>
													<div
														style={{
															background:
																'transparent',
															padding: 20,
															width: 490,
															height: 390,
															border: '1px double white',
															position:
																'absolute',
															top: 55,
															left: 55,
															pointerEvents:
																'all',
														}}
													>
														{/* Edit your user here! */}
														<div
															style={{
																position:
																	'absolute',
																pointerEvents:
																	'all',
															}}
														>
															<h1
																style={{
																	textAlign:
																		'center',
																	fontSize:
																		'2.9em',
																	fontFamily:
																		'Georgia, serif',
																	marginBottom:
																		'-2px',
																}}
															>
																{
																	values
																		.profile
																		.username
																}
															</h1>
															{/* Adjectives here, can fit some more before it goes onto a new line so experiment with it :D */}
															<p
																style={{
																	textAlign:
																		'center',
																}}
															>
																{
																	values
																		.profile
																		.subheader
																}
															</p>
															{/* Social inks, replace the text in the quotations of the href field to your correct url, feel free to delete them if you don't want to share them */}
															<div
																style={{
																	width: '100%',
																	textAlign:
																		'center',
																	fontSize:
																		'1.0em',
																	float: 'right',
																	position:
																		'relative',
																	pointerEvents:
																		'all',
																	zIndex: 11,
																}}
															>
																<a
																	href={values.socials.deviantArt.link}
																	hidden={
																		!values
																			.socials
																			.deviantArt
																			.show
																	}
																>
																	<i className="fab fa-deviantart fa-fw" />
																</a>
                                <a
																	href={values.socials.furAffinity.link}
																	hidden={
																		!values
																			.socials
																			.furAffinity
																			.show
																	}
																>
																	<i className="fas fa-paw fa-fw" />
																</a>
                                <a
																	href={values.socials.twitter.link}
																	hidden={
																		!values
																			.socials
																			.twitter
																			.show
																	}
																>
																	<i className="fab fa-twitter fa-fw" />
																</a>
                                <a
																	href={values.socials.tumblr.link}
																	hidden={
																		!values
																			.socials
																			.tumblr
																			.show
																	}
																>
																	<i className="fab fa-tumblr fa-fw" />
																</a>
                                <a
																	href={values.socials.instagram.link}
																	hidden={
																		!values
																			.socials
																			.instagram
																			.show
																	}
																>
																	<i className="fab fa-instagram fa-fw" />
																</a>
															</div>
															<br />
															<br />
															{/* Change the introduction about you, can be short but more the better. */}
															<div
																style={{
																	height: 120,
																	overflow:
																		'auto',
																	fontFamily:
																		'Calibri, Verdana, san-serif',
																	position:
																		'relative',
																	pointerEvents:
																		'all',
																	zIndex: 10,
																}}
															>
																{values.bio
																	.split('\n')
																	.map(
																		(t, i) => (
																			<p key={i}>
																				{
																					t
																				}
																			</p>
																		)
																	)}
															</div>
															{/* Not a real music player.  Just Rick Rolled you silently. */}
															<div
																style={{
																	position:
																		'absolute',
																	top: 270,
																	left: 100,
																	background:
																		'rgba(255,255,255,0.3)',
																	borderRadius: 20,
																	padding: 5,
																	fontFamily:
																		'"Courier New", monospace',
																	fontSize:
																		'0.8em',
																}}
															>
																<i className="fas fa-music" />{' '}
																{values.playing}
															</div>
														</div>
														{/* This dev can be deleted if you don't want/need it, will still look pretty! */}
														<div
															style={{
																position:
																	'absolute',
																top: 325,
																left: 145,
																fontFamily:
																	'"Courier New", monospace',
																fontSize:
																	'0.8em',
																zIndex: 9,
															}}
															hidden={
																values
																	.commissions
																	.hidden
															}
														>
															<b>Commissions:</b>{' '}
															{values.commissions
																.clickable ? (
																<a
																	href={
																		values
																			.commissions
																			.url
																	}
																>
																	{
																		values
																			.commissions
																			.status
																	}
																</a>
															) : (
																<span>
																	{
																		values
																			.commissions
																			.status
																	}
																</span>
															)}
															<br />
															<b>
																Requests:
															</b>{' '}
															{values.requests}
															<br />
															<b>Trades:</b>{' '}
															{values.trades}
														</div>
														<div
															style={{
																background: `url("${values.images.foreground}")`,
																width: 600,
																height: 500,
																position:
																	'relative',
																top: '-75px',
																left: '-75px',
															}}
														>
															{/* Replace entire url in () with a size 131x131 in pixels image.  Needs to be hosted somewhere online. */}
															<div
																style={{
																	background: `url("${values.images.profile}")`,
																	width: 131,
																	height: 131,
																	position:
																		'absolute',
																	top: 340,
																	left: 34,
																	borderRadius: 100,
																}}
															></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* credit time, do not change */}
										<div
											style={{
												textAlign: 'center',
												marginTop: '-15px',
											}}
										>
											<a
												href="https://toyhou.se/Camy"
												title="Space background and graphics by Camy"
											>
												<i className="fas fa-image" />
											</a>
											&nbsp;
											<a
												href="https://toyhou.se/Camy"
												title="Code by Camy"
											>
												<i className="fas fa-code" />
											</a>
										</div>
									</div>

									{/* ### END ### */}
								</div>
							</div>
						</div>
						<PageSegment>
							<h2>Results</h2>
							<pre className="bg-dark text-white tw-p-6 tw-rounded-md tw-select-all">
								<code>{`<div style="container">
  <!-- ${Globals.watermark} -->
  <div style="margin: 0 auto;background: url('${values.images.background}') no-repeat;width: 600px; height: 505px; color: #fff;">
    <div style="background-image: url('${values.images.base}'); background-repeat: no-repeat; width: 600px; height: 500px; position: relative;">
        <div style="background: transparent; padding: 20px; width: 490px; height: 390px; border: 1px double white; position: absolute; top: 55px; left: 55px; pointer-events: all;">
          <!-- Edit your user here! -->
              <div style="position: absolute; pointer-events: all;"><h1 style="text-align: center; font-size: 2.9em; font-family: Georgia, serif; margin-bottom: -2px;">${values.profile.username}</h1>
              <!-- Adjectives here, can fit some more before it goes onto a new line so experiment with it :D -->
              <p style="text-align: center;">${values.profile.subheader}</p>
              <!-- Social inks, replace the text in the quotations of the href field to your correct url, feel free to delete them if you don't want to share them -->
                    <div style="width: 100%; text-align: center;font-size: 1.0em; float: right; position: relative; pointer-events: all; z-index:11;">
                        ${values.socials.deviantArt.show ? `<a href=${values.socials.deviantArt.link}><i class="fab fa-deviantart fa-fw"></i></a>` : ''}
                        ${values.socials.furAffinity.show ? `<a href=${values.socials.furAffinity.link}><i class="fas fa-paw fa-fw"></i></a>` : ''}
                        ${values.socials.twitter.show ? `<a href=${values.socials.twitter.link}><i class="fab fa-twitter fa-fw"></i></a>` : ''}
                        ${values.socials.tumblr.show ? `<a href=${values.socials.tumblr.link}><i class="fab fa-tumblr fa-fw"></i></a>` : ''}
                        ${values.socials.instagram.show ? `<a href=${values.socials.instagram.link}><i class="fab fa-instagram fa-fw"></i></a>` : ''}
                    </div>
                  <br><br>
                  <!-- Change the introduction about you, can be short but more the better. -->
                  <div style="height: 120px; overflow: auto; font-family: Calibri, Verdana, san-serif; position: relative; pointer-events: all; z-index:10;">
                      ${values.bio.split('\n').map(t => `<p>${t}</p>`).join('')}
                  </div>
                  <!-- Not a real music player.  Just Rick Rolled you silently. -->
                  <div style="position: absolute; top: 270px; left: 100px; background: rgba(255,255,255,0.3); border-radius: 20px; padding: 5px; font-family: 'Courier New', monospace; font-size: 0.8em;"><i class="fas fa-music"></i>${values.playing}</div>
                  </div>
                  <!-- This dev can be deleted if you don't want/need it, will still look pretty! -->
                  ${values.commissions.hidden ? '' : `<div style="position: absolute; top: 325px; left: 145px; font-family: 'Courier New', monospace; font-size: 0.8em; z-index:9;"><b>Commissions:</b> ${values.commissions.clickable ? `<a href="${values.commissions.url}">${values.commissions.status}</a>` : `<span>${values.commissions.status}</span>`}<br>
                  <b>Requests:</b> ${values.requests}<br>
                  <b>Trades:</b> ${values.trades}
                  </div>`}
        <div style="background: url('${values.images.foreground}'); width: 600px; height: 500px; position: relative; top: -75px; left: -75px;">
          <!-- Replace entire url in () with a size 131x131 in pixels image.  Needs to be hosted somewhere online. -->
          <div style="background: url('${values.images.profile}'); width: 131px; height: 131px; position: absolute; top: 340px; left: 34px; border-radius: 100px;">
          </div>
        </div>
        </div>
    </div>
  </div>
</div>
<!-- credit time, do not change -->
<!-- ${Globals.watermark} -->
<div style="text-align:center; margin-top: -15px;">
  <a href="https://toyhou.se/Camy" title="Space background and graphics by Camy"><i class="fas fa-image"></i></a>&nbsp;<a href="https://toyhou.se/Camy" title="Code by Camy"><i class="fas fa-code"></i></a>
</div>
`}</code>
							</pre>
						</PageSegment>
					</>
				)}
			</Formik>
		</TemplatePage>
	);
};

export default Template;
