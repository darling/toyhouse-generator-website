import { FieldArray, Formik } from 'formik';
import { concat, take, times, truncate } from 'lodash';
import React from 'react';

import { FormColorInput, FormGroup, FormInput, FormLongInput } from '../../components/FormGroups';
import { PageSegment } from '../../components/PageSegment';
import { Meta } from '../../layout/Meta';
import { TemplatePage } from '../../templates/TemplatePage';
import { Globals } from '../../utils/AppConfig';

const templateInfo = {
	title: 'Path',
	author: 'Togo',
	authorUrl: 'https://toyhou.se/Togo',
	description: '',
	url: 'https://toyhou.se/11248392.-06-path',
	policyUrl: 'https://toyhou.se/8041133.tos',
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
						name: 'NAME SURNAME',
						youtubeCode: 'nx-qpEMUzes',
						adjective: 'adjective • adjective • adjective',
					},
					properties: {
						nickname: 'content',
						age: 'content',
						gender: 'content',
						orientation: 'content',
						occupation: 'content',
						role: 'content',
						status: 'content',
					},
					traits: {
						height: 'content',
						weight: 'content',
						build: 'content',
						species: 'content',
						hair: 'color',
						skin: 'color',
						eyes: 'color',
					},
					design: {
						notes: [
							{
								value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
							},
							{
								value: 'Aliquam massa quam, pellentesque vitae vulputate ac',
							},
						],
						colors: {
							one: '#000000',
							two: '#111',
							three: '#222',
							four: '#333',
							five: '#444',
						},
						authorUrl: 'https://toyhou.se/safe',
						worth: '$0',
					},
					alignments: {
						reserved: '50',
						immature: '50',
						timid: '50',
						sincere: '50',
						sensitive: '50',
						lazy: '50',
					},
					images: {
						background:
							'https://images.unsplash.com/photo-1575489272413-cb506258027e',
						fullbody: '/img/placeholder-transparent.png',
						profile: '/img/placeholder-transparent.png',
					},
					history: {
						quote: '"A quote, title or tagline goes here."',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra quis enim nec accumsan. In hac habitasse platea dictumst. Mauris blandit scelerisque augue et sollicitudin. Integer eget dignissim massa. Cras gravida nulla sit amet justo malesuada vestibulum. Praesent posuere commodo tellus at convallis. Sed in lectus feugiat, hendrerit elit vel, tempor ante. Integer interdum luctus lorem, eu euismod diam sagittis eget. Nulla et tempor augue. Maecenas pulvinar blandit arcu vel fringilla. ',
						image: '/img/placeholder-transparent.png',
					},
					personality: {
						subheader: 'MBTI // ALIGNMENT // ZODIAC // ELEMENT',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra quis enim nec accumsan. In hac habitasse platea dictumst. Mauris blandit scelerisque augue et sollicitudin. Integer eget dignissim massa. Cras gravida nulla sit amet justo malesuada vestibulum. Praesent posuere commodo tellus at convallis. Sed in lectus feugiat, hendrerit elit vel, tempor ante. Integer interdum luctus lorem, eu euismod diam sagittis eget. Nulla et tempor augue. Maecenas pulvinar blandit arcu vel fringilla. ',
						image: '/img/placeholder-transparent.png',
					},
					relationship1: {
						name: 'NAME',
						relationship: 'relationship',
						bio: 'A short relationship summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin, velit et mattis hendrerit. ',
						imageUrl: '/img/placeholder-transparent.png',
						characterUrl: 'https://toyhou.se/',
						hearts: 3,
					},
					relationship2: {
						name: 'NAME',
						relationship: 'relationship',
						bio: 'These boxes will not scroll, so keep them short! Aenean vestibulum interdum enim sed sollicitudin. Integer non quam nunc. Curabitur commodo eros nec ornare varius. ',
						imageUrl: '/img/placeholder-transparent.png',
						characterUrl: 'https://toyhou.se/',
						hearts: 3,
					},
					miniRelationship1: {
						name: 'NAME',
						relationship: 'relationship',
						imageUrl: '/img/placeholder-transparent.png',
						characterUrl: 'https://toyhou.se/',
						hearts: 3,
					},
					miniRelationship2: {
						name: 'NAME',
						relationship: 'relationship',
						imageUrl: '/img/placeholder-transparent.png',
						characterUrl: 'https://toyhou.se/',
						hearts: 3,
					},
					miniRelationship3: {
						name: 'NAME',
						relationship: 'relationship',
						imageUrl: '/img/placeholder-transparent.png',
						characterUrl: 'https://toyhou.se/',
						hearts: 3,
					},
					moodboard: {
						one: '/img/placeholder-solid.png',
						two: '/img/placeholder-solid.png',
						three: '/img/placeholder-solid.png',
						four: '/img/placeholder-solid.png',
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
									<FormInput for="profile.name" />
									<FormInput for="profile.adjective" />
									<FormInput for="profile.youtubeCode" />
									<FormInput for="images.background" />
									<FormInput for="images.profile" />
								</FormGroup>
								<FormGroup title="Properties">
									<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
										<FormInput for="properties.nickname" />
										<FormInput for="properties.age" />
										<FormInput for="properties.gender" />
										<FormInput for="properties.orientation" />
										<FormInput for="properties.occupation" />
										<FormInput for="properties.role" />
										<FormInput for="properties.status" />
									</div>
								</FormGroup>
								<FormGroup title="Alignments">
									<p className="tw-italic">
										Numbers are in percentage
									</p>
									<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
										<FormInput for="alignments.reserved" />
										<FormInput for="alignments.immature" />
										<FormInput for="alignments.timid" />
										<FormInput for="alignments.sincere" />
										<FormInput for="alignments.sensitive" />
										<FormInput for="alignments.lazy" />
									</div>
								</FormGroup>
								<FormGroup title="Moodboard">
									<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
										<FormInput for="moodboard.one" />
										<FormInput for="moodboard.two" />
										<FormInput for="moodboard.three" />
										<FormInput for="moodboard.four" />
									</div>
								</FormGroup>
								<FormGroup title="History">
									<FormLongInput for="history.body" />
									<FormInput for="history.quote" />
									<FormInput for="history.image" />
								</FormGroup>
								<FormGroup title="Design">
									<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-4">
										<FormInput for="traits.height" />
										<FormInput for="traits.weight" />
										<FormInput for="traits.build" />
										<FormInput for="traits.species" />
										<FormInput for="traits.hair" />
										<FormInput for="traits.skin" />
										<FormInput for="traits.eyes" />
									</div>
									<FormInput for="design.authorUrl" />
									<FormInput for="images.fullbody" />
									<FormInput for="design.worth" />
									<div className="tw-grid tw-grid-flow-row tw-grid-cols-2">
										<FormColorInput for="design.colors.one" />
										<FormColorInput for="design.colors.two" />
										<FormColorInput for="design.colors.three" />
										<FormColorInput for="design.colors.four" />
										<FormColorInput for="design.colors.five" />
									</div>
								</FormGroup>
								<FormGroup title="Design Notes">
									<FieldArray name="design.notes">
										{({ remove, push }) => (
											<div>
												{values.design.notes.length >
													0 &&
													values.design.notes.map(
														(item, index) => (
															<div
																key={
																	index
																}
																className="my-4"
															>
																<FormInput
																	for={`design.notes[${index}].value`}
																/>
																<button
																	className="btn btn-danger"
																	onClick={() =>
																		remove(
																			index
																		)
																	}
																>
																	remove{' '}
																	{truncate(
																		item.value,
																		{
																			length: 12,
																		}
																	)}
																</button>
															</div>
														)
													)}
												<button
													className="btn btn-primary"
													onClick={() =>
														push({
															value: 'New element',
														})
													}
												>
													Add element
												</button>
											</div>
										)}
									</FieldArray>
								</FormGroup>
								<FormGroup title="Personality">
									<FormInput for="personality.subheader" />
									<FormLongInput for="personality.body" />
									<FormInput for="personality.image" />
								</FormGroup>
								<FormGroup title="Big Relationships">
									<h4>Relationship 1</h4>
									<FormInput for="relationship1.name" />
									<FormInput for="relationship1.relationship" />
									<FormInput for="relationship1.hearts" />
									<FormInput for="relationship1.imageUrl" />
									<FormInput for="relationship1.characterUrl" />
									<FormLongInput for="relationship1.bio" />
									<h4>Relationship 2</h4>
									<FormInput for="relationship2.name" />
									<FormInput for="relationship2.relationship" />
									<FormInput for="relationship2.hearts" />
									<FormInput for="relationship2.imageUrl" />
									<FormInput for="relationship2.characterUrl" />
									<FormLongInput for="relationship2.bio" />
								</FormGroup>
								<FormGroup title="Small Relationships">
									<h4>Top</h4>
									<FormInput for="miniRelationship1.name" />
									<FormInput for="miniRelationship1.relationship" />
									<FormInput for="miniRelationship1.hearts" />
									<FormInput for="miniRelationship1.characterUrl" />
									<FormInput for="miniRelationship1.imageUrl" />
									<h4>Middle</h4>
									<FormInput for="miniRelationship2.name" />
									<FormInput for="miniRelationship2.relationship" />
									<FormInput for="miniRelationship2.hearts" />
									<FormInput for="miniRelationship2.characterUrl" />
									<FormInput for="miniRelationship2.imageUrl" />
									<h4>Bottom</h4>
									<FormInput for="miniRelationship3.name" />
									<FormInput for="miniRelationship3.relationship" />
									<FormInput for="miniRelationship3.hearts" />
									<FormInput for="miniRelationship3.characterUrl" />
									<FormInput for="miniRelationship3.imageUrl" />
								</FormGroup>
							</div>
							<div>
								<div className="tw-prose">
									<h2>Preview</h2>
								</div>
								<PageSegment>
									<div className="tw-prose tw-prose-sm tw-rounded-lg tw-bg-gray-300 tw-p-3">
										<p>
											Images and Icons may render weird or
											be placed wrongly within their
											container. This is just the preview,
											please try testing the code on
											toyhouse just incase. (I don't want
											to pay for font-awesome premium,
											which toyhouse has.)
										</p>
									</div>
									{/* ### START ### */}
									{/* MAIN CONTAINER =======================*/}
									<div
										className="mx-auto my-2 p-5"
										style={{
											maxWidth: 1000,
											backgroundImage: `url(${values.images.background})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
											borderRadius: 15,
										}}
									>
										<div className="row justify-content-center">
											<div className="col-auto order-lg-1 flex-column">
												{/* ICON + NAME (MIDDLE) CARD ============*/}
												<div
													className="card mb-4 p-3 border-0"
													style={{
														flex: '1 1 0',
														maxWidth: 232,
														borderRadius:
															'116px 116px 15px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<img
														className="bg-success rounded-circle"
														src={
															values.images
																.profile
														}
														style={{ width: 200 }}
													/>
													{/* icon - 200x200 looks best */}
													<p
														className="mt-3 mb-0 text-center text-success"
														style={{
															fontSize: 22,
															letterSpacing: 1,
															fontVariant:
																'small-caps',
														}}
													>
														{values.profile.name}
													</p>
													<div className="row no-gutters align-items-center my-1">
														<div className="col">
															<hr className="m-0" />
														</div>
														<div className="col-auto">
															<i className="fad fa-seedling mx-3 text-success" />
														</div>
														<div className="col">
															<hr className="m-0" />
														</div>
													</div>
													<p className="text-center text-muted">
														{
															values.profile
																.adjective
														}
													</p>
													<hr className="w-100 my-3" />
													{/* MUSIC PLAYER =======================*/}
													<div
														style={{
															position:
																'relative',
															height: 100,
															borderRadius: 10,
															overflow: 'hidden',
														}}
													>
														<iframe
															width={200}
															height={300}
															src={`https://www.youtube.com/embed/${values.profile.youtubeCode}?controls=0`}
															frameBorder={0}
															style={{
																position:
																	'absolute',
																top: '-100px',
															}}
														/>
														{/* replace with youtube embed, keep ?controls=0 at the end */}
													</div>
												</div>
											</div>
											<div className="col-lg flex-column mt-lg-5 pt-lg-5">
												{/* FIELDS (LEFT) CARD ====================
                        
                          > you can edit the names and values of
                            fields, but keep the amount the same -
                            if they're not the cards will end up 
                            with empty spaces at the bottom.
                            
                        =========================================*/}
												<div
													className="card mt-lg-5 mb-4 p-3 text-monospace text-muted border-0"
													style={{
														flex: '1 1 0',
														borderRadius:
															'60px 15px 15px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<hr
														className="m-0"
														style={{
															position:
																'absolute',
															top: 32,
															right: 64,
															left: 40,
														}}
													/>
													<p className="text-right mb-1">
														<i
															className="fad fa-tree-alt text-success"
															style={{
																fontSize: 32,
															}}
														/>
													</p>
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															NICKNAME
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.nickname
															}
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															AGE
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.age
															}
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															GENDER
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.gender
															}
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															ORIENTATION
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.orientation
															}
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															OCCUPATION
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.occupation
															}
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															ROLE
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.role
															}
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															STATUS
														</div>
														<div className="col-auto mx-2 text-success">
															•
														</div>
														<div className="col text-right">
															{
																values
																	.properties
																	.status
															}
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg order-lg-2 flex-column mt-lg-5 pt-lg-5">
												{/* PERSONALITY BARS (RIGHT) CARD =========
                        
                          > like fields you can edit the names on
                            the sides of the progress bars, but 
                            keep the same amount !
                          
                        =========================================*/}
												<div
													className="card mt-lg-5 mb-4 p-3 text-monospace text-muted border-0"
													style={{
														flex: '1 1 0',
														fontSize: 18,
														fontVariant:
															'small-caps',
														borderRadius:
															'15px 60px 15px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<hr
														className="m-0"
														style={{
															position:
																'absolute',
															top: 32,
															right: 40,
															left: 64,
														}}
													/>
													<p>
														<i
															className="fad fa-acorn text-success"
															style={{
																fontSize: 32,
															}}
														/>
													</p>
													<div className="row no-gutters align-items-center">
														<div className="col text-truncate">
															reserved
														</div>
														<div className="col-6">
															<div
																className="progress mt-1 mx-2 rounded-0"
																style={{
																	height: 2,
																	overflow:
																		'visible',
																}}
															>
																<div
																	className="progress-bar"
																	style={{
																		height: '100%',
																		width: `${values.alignments.reserved}%`,
																		backgroundColor:
																			'transparent',
																	}}
																/>
																<div
																	className="bg-success"
																	style={{
																		height: 8,
																		width: 8,
																		margin: '-3px 0 0 -4px',
																		borderRadius:
																			'50%',
																	}}
																/>
															</div>
														</div>
														<div className="col text-right text-truncate">
															friendly
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-truncate">
															immature
														</div>
														<div className="col-6">
															<div
																className="progress mt-1 mx-2 rounded-0"
																style={{
																	height: 2,
																	overflow:
																		'visible',
																}}
															>
																<div
																	className="progress-bar"
																	style={{
																		height: '100%',
																		width: `${values.alignments.immature}%`,
																		backgroundColor:
																			'transparent',
																	}}
																/>
																<div
																	className="bg-success"
																	style={{
																		height: 8,
																		width: 8,
																		margin: '-3px 0 0 -4px',
																		borderRadius:
																			'50%',
																	}}
																/>
															</div>
														</div>
														<div className="col text-right text-truncate">
															serious
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-truncate">
															timid
														</div>
														<div className="col-6">
															<div
																className="progress mt-1 mx-2 rounded-0"
																style={{
																	height: 2,
																	overflow:
																		'visible',
																}}
															>
																<div
																	className="progress-bar"
																	style={{
																		height: '100%',
																		width: `${values.alignments.timid}%`,
																		backgroundColor:
																			'transparent',
																	}}
																/>
																<div
																	className="bg-success"
																	style={{
																		height: 8,
																		width: 8,
																		margin: '-3px 0 0 -4px',
																		borderRadius:
																			'50%',
																	}}
																/>
															</div>
														</div>
														<div className="col text-right text-truncate">
															brave
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-truncate">
															sincere
														</div>
														<div className="col-6">
															<div
																className="progress mt-1 mx-2 rounded-0"
																style={{
																	height: 2,
																	overflow:
																		'visible',
																}}
															>
																<div
																	className="progress-bar"
																	style={{
																		height: '100%',
																		width: `${values.alignments.sincere}%`,
																		backgroundColor:
																			'transparent',
																	}}
																/>
																<div
																	className="bg-success"
																	style={{
																		height: 8,
																		width: 8,
																		margin: '-3px 0 0 -4px',
																		borderRadius:
																			'50%',
																	}}
																/>
															</div>
														</div>
														<div className="col text-right text-truncate">
															deceptive
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-truncate">
															sensitive
														</div>
														<div className="col-6">
															<div
																className="progress mt-1 mx-2 rounded-0"
																style={{
																	height: 2,
																	overflow:
																		'visible',
																}}
															>
																<div
																	className="progress-bar"
																	style={{
																		height: '100%',
																		width: `${values.alignments.sensitive}%`,
																		backgroundColor:
																			'transparent',
																	}}
																/>
																<div
																	className="bg-success"
																	style={{
																		height: 8,
																		width: 8,
																		margin: '-3px 0 0 -4px',
																		borderRadius:
																			'50%',
																	}}
																/>
															</div>
														</div>
														<div className="col text-right text-truncate">
															tough
														</div>
													</div>
													<hr className="w-100 my-2" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-truncate">
															lazy
														</div>
														<div className="col-6">
															<div
																className="progress mt-1 mx-2 rounded-0"
																style={{
																	height: 2,
																	overflow:
																		'visible',
																}}
															>
																<div
																	className="progress-bar"
																	style={{
																		height: '100%',
																		width: `${values.alignments.lazy}%`,
																		backgroundColor:
																			'transparent',
																	}}
																/>
																<div
																	className="bg-success"
																	style={{
																		height: 8,
																		width: 8,
																		margin: '-3px 0 0 -4px',
																		borderRadius:
																			'50%',
																	}}
																/>
															</div>
														</div>
														<div className="col text-right text-truncate">
															diligent
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* MOODBOARD ==========================*/}
										<div
											className="card p-2 mb-5 border-0"
											style={{
												borderRadius: 15,
												boxShadow:
													'0 0 10px rgba(0,0,0,.4)',
											}}
										>
											<div className="row no-gutters">
												<div className="col-6 col-lg-3 p-2">
													<div
														className="w-100 bg-faded"
														style={{
															paddingBottom:
																'100%',
															backgroundImage: `url(${values.moodboard.one})`,
															backgroundSize:
																'cover',
															backgroundPosition:
																'center',
															borderRadius: 8,
														}}
													/>
												</div>
												<div className="col-6 col-lg-3 p-2">
													<div
														className="w-100 bg-faded"
														style={{
															paddingBottom:
																'100%',
															backgroundImage: `url(${values.moodboard.two})`,
															backgroundSize:
																'cover',
															backgroundPosition:
																'center',
															borderRadius: 8,
														}}
													/>
												</div>
												<div className="col-6 col-lg-3 p-2">
													<div
														className="w-100 bg-faded"
														style={{
															paddingBottom:
																'100%',
															backgroundImage: `url(${values.moodboard.three})`,
															backgroundSize:
																'cover',
															backgroundPosition:
																'center',
															borderRadius: 8,
														}}
													/>
												</div>
												<div className="col-6 col-lg-3 p-2">
													<div
														className="w-100 bg-faded"
														style={{
															paddingBottom:
																'100%',
															backgroundImage: `url(${values.moodboard.four})`,
															backgroundSize:
																'cover',
															backgroundPosition:
																'center',
															borderRadius: 8,
														}}
													/>
												</div>
											</div>
										</div>
										{/* HISTORY ============================*/}
										<div className="row flex-lg-row-reverse my-4">
											<div className="col-lg-auto text-center">
												<img
													src={values.history.image}
													className="mb-4"
													style={{ maxWidth: 300 }}
												/>
												{/* pagedoll - looks best transparent */}
											</div>
											<div className="col-lg flex-column">
												<div
													className="card d-block d-lg-flex mb-4 p-3 border-0"
													style={{
														flex: '1 1 0',
														borderRadius: 15,
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters align-items-center mb-2">
														<div className="col-auto">
															<p
																className="text-success mt-n2"
																style={{
																	fontSize: 28,
																	letterSpacing: 1,
																	fontVariant:
																		'small-caps',
																}}
															>
																history
															</p>
														</div>
														<div className="col">
															<hr className="my-0 mx-3" />
														</div>
														<div className="col-auto">
															<i
																className="fad fa-tree-large text-success"
																style={{
																	fontSize: 24,
																}}
															/>
														</div>
													</div>
													<div
														style={{
															flex: '1 1 0',
															overflowY: 'auto',
														}}
													>
														{values.history.body
															.split('\n')
															.map((t) => (
																<p key={t}>
																	{t}
																</p>
															))}
													</div>
													<p className="mt-3 text-monospace text-right text-success">
														<i>
															{
																values.history
																	.quote
															}
														</i>
													</p>
												</div>
											</div>
										</div>
										{/* DESIGN =============================*/}
										<div className="row justify-content-center align-items-center">
											<div className="col-lg-auto order-lg-1 text-center">
												<img
													src={values.images.fullbody}
													className="w-100 mb-4"
													style={{ maxWidth: 550 }}
												/>
												{/* main fullbody image - looks best transparent */}
											</div>
											<div className="col-auto order-lg-2">
												{/* COLOUR SCHEME ======================*/}
												<div
													className="card flex-row flex-lg-column p-2 mb-4 border-0"
													style={{
														borderRadius: 30,
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div
														className="mr-2 mr-lg-0 mb-lg-2"
														style={{
															backgroundColor:
																values.design
																	.colors.one,
															width: 40,
															height: 40,
															borderRadius: '50%',
														}}
													/>
													<div
														className="mr-2 mr-lg-0 mb-lg-2"
														style={{
															backgroundColor:
																values.design
																	.colors.two,
															width: 40,
															height: 40,
															borderRadius: '50%',
														}}
													/>
													<div
														className="mr-2 mr-lg-0 mb-lg-2"
														style={{
															backgroundColor:
																values.design
																	.colors
																	.three,
															width: 40,
															height: 40,
															borderRadius: '50%',
														}}
													/>
													<div
														className="mr-2 mr-lg-0 mb-lg-2"
														style={{
															backgroundColor:
																values.design
																	.colors
																	.four,
															width: 40,
															height: 40,
															borderRadius: '50%',
														}}
													/>
													<div
														style={{
															backgroundColor:
																values.design
																	.colors
																	.five,
															width: 40,
															height: 40,
															borderRadius: '50%',
														}}
													/>
												</div>
											</div>
											<div className="col-lg">
												{/* DESIGN DETAILS + NOTES =============*/}
												<div
													className="card mb-2 p-3 text-monospace border-0"
													style={{
														borderRadius:
															'25px 25px 5px 5px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															HEIGHT
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{
																values.traits
																	.height
															}
														</div>
													</div>
													<hr className="w-100 my-1" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															WEIGHT
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{
																values.traits
																	.weight
															}
														</div>
													</div>
													<hr className="w-100 my-1" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															BUILD
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{
																values.traits
																	.build
															}
														</div>
													</div>
													<hr className="w-100 my-1" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															SPECIES
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{
																values.traits
																	.species
															}
														</div>
													</div>
												</div>
												{/*====================================*/}
												<div
													className="card mb-4 p-3 text-monospace border-0"
													style={{
														borderRadius:
															'5px 5px 25px 25px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															HAIR
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{values.traits.hair}
														</div>
													</div>
													<hr className="w-100 my-1" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															SKIN
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{values.traits.skin}
														</div>
													</div>
													<hr className="w-100 my-1" />
													{/*====================================*/}
													<div className="row no-gutters align-items-center">
														<div className="col text-success">
															EYES
														</div>
														<div className="col-auto mx-2 text-success">
															//
														</div>
														<div className="col text-right">
															{values.traits.eyes}
														</div>
													</div>
												</div>
												<div
													className="card mb-4 p-3 border-0"
													style={{
														borderRadius: 15,
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<p
														className="mt-n2 text-monospace text-success"
														style={{
															fontSize: 20,
															letterSpacing: 1,
															fontVariant:
																'small-caps',
														}}
													>
														design notes
													</p>
													<ul className="mb-0 pl-3">
														{values.design.notes.map(
															(note, i) => (
																<li
																	key={`${i}${note.value}`}
																	className="text-success"
																>
																	<span className="text-body">
																		{
																			note.value
																		}
																	</span>
																</li>
															)
														)}
													</ul>
												</div>
												<div
													className="row no-gutters mb-4"
													style={{ height: 50 }}
												>
													<div className="col-auto mr-2">
														{/* DESIGNER CREDIT + WORTH ============*/}
														<a
															href={
																values.design
																	.authorUrl
															}
															title="Designer Url"
															data-toggle="tooltip"
															data-placement="bottom"
															className="btn btn-success d-flex justify-content-center align-items-center"
															style={{
																height: 50,
																width: 50,
																fontSize: 18,
																borderRadius:
																	'25px 5px 5px 25px',
																boxShadow:
																	'0 0 10px rgba(0,0,0,.4)',
															}}
														>
															<i className="fad fa-pencil-ruler" />
														</a>
													</div>
													<div className="col">
														<div
															className="card px-3 text-monospace text-success border-0"
															style={{
																height: 50,
																borderRadius:
																	'5px 25px 25px 5px',
																boxShadow:
																	'0 0 10px rgba(0,0,0,.4)',
															}}
														>
															<div className="row no-gutters align-items-center h-100">
																<div className="col">
																	<hr
																		className="m-0"
																		style={{
																			marginBottom:
																				'-2px',
																			borderWidth: 4,
																			borderTopStyle:
																				'dotted',
																		}}
																	/>
																</div>
																<div className="col-auto ml-3">
																	WORTH{' '}
																	{
																		values
																			.design
																			.worth
																	}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* PERSONALITY ========================*/}
										<div className="row my-4">
											<div className="col-lg-auto text-center">
												<img
													src={
														values.personality.image
													}
													className="mb-4"
													style={{ maxWidth: 300 }}
												/>
												{/* pagedoll - looks best transparent */}
											</div>
											<div className="col-lg flex-column">
												<div
													className="card d-block d-lg-flex mb-4 p-3 border-0"
													style={{
														flex: '1 1 0',
														borderRadius: 15,
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<p className="mb-2 text-monospace text-success">
														<i>
															{
																values
																	.personality
																	.subheader
															}
														</i>
													</p>
													<div
														style={{
															flex: '1 1 0',
															overflowY: 'auto',
														}}
													>
														{values.personality.body
															.split('\n')
															.map((t) => (
																<p key={t}>
																	{t}
																</p>
															))}
													</div>
													<div className="row no-gutters align-items-center mt-2 mb-n1">
														<div className="col-auto">
															<i
																className="fad fa-leaf-oak text-success"
																style={{
																	fontSize: 24,
																}}
															/>
														</div>
														<div className="col">
															<hr className="my-0 mx-3" />
														</div>
														<div className="col-auto">
															<p
																className="text-success mt-n2"
																style={{
																	fontSize: 28,
																	letterSpacing: 1,
																	fontVariant:
																		'small-caps',
																}}
															>
																personality
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											{/* BIG LINKS (LEFT) ===================*/}
											<div className="col-lg flex-column">
												<div
													className="card flex-grow-1 p-3 mb-3 ml-lg-4 border-0"
													style={{
														borderRadius:
															'100px 15px 15px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters">
														<div className="col-lg-auto mb-3 mb-lg-0 mr-lg-3">
															<div
																className="bg-success"
																style={{
																	minWidth: 150,
																	height: '100%',
																	paddingBottom:
																		'100%',
																	backgroundImage: `url(${values.relationship1.imageUrl})`,
																	backgroundSize:
																		'cover',
																	backgroundPosition:
																		'center',
																	borderRadius:
																		'85px 5px 5px 5px',
																}}
															/>
														</div>
														<div className="col flex-column">
															<div className="row no-gutters align-items-center">
																<div className="col-auto mt-n2 mr-3">
																	<a
																		href={
																			values
																				.relationship1
																				.characterUrl
																		}
																		className="text-body"
																		style={{
																			fontSize: 20,
																			letterSpacing: 1,
																			fontVariant:
																				'small-caps',
																		}}
																	>
																		{
																			values
																				.relationship1
																				.name
																		}
																	</a>
																</div>
																<div className="col text-monospace text-right text-muted">
																	{
																		values
																			.relationship1
																			.relationship
																	}
																</div>
															</div>
															<hr className="w-100 my-1" />
															<div className="text-center text-success">
																•
																{/* relationship level - fas are filled hearts, far are empty */}
																<span className="mx-2">
																	{take(
																		concat(
																			times(
																				values
																					.relationship1
																					.hearts,
																				(
																					_n
																				) =>
																					's'
																			),
																			times(
																				Math.abs(
																					5 -
																						values
																							.relationship1
																							.hearts
																				),
																				(
																					_n
																				) =>
																					'r'
																			)
																		),
																		5
																	).map(
																		(n) => (
																			<i
																				className={`fa${n} fa-heart`}
																			/>
																		)
																	)}
																</span>
																•
															</div>
															<div
																className="flex-grow-1 flex-column justify-content-center text-center font-italic"
																style={{
																	fontSize: 13,
																}}
															>
																<p>
																	{
																		values
																			.relationship1
																			.bio
																	}
																</p>
															</div>
														</div>
													</div>
												</div>
												{/*====================================*/}
												<div
													className="card flex-grow-1 p-3 mb-4 border-0"
													style={{
														borderRadius:
															'15px 15px 15px 100px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row flex-lg-row-reverse no-gutters">
														<div className="col flex-column">
															<div className="row no-gutters align-items-center">
																<div className="col-auto mt-n2 mr-3">
																	<a
																		href={
																			values
																				.relationship2
																				.characterUrl
																		}
																		className="text-body"
																		style={{
																			fontSize: 20,
																			letterSpacing: 1,
																			fontVariant:
																				'small-caps',
																		}}
																	>
																		{
																			values
																				.relationship2
																				.name
																		}
																	</a>
																</div>
																<div className="col text-monospace text-right text-muted">
																	{
																		values
																			.relationship2
																			.relationship
																	}
																</div>
															</div>
															<hr className="w-100 my-1" />
															<div className="text-center text-success">
																•
																<span className="mx-2">
																	{take(
																		concat(
																			times(
																				values
																					.relationship2
																					.hearts,
																				(
																					_n
																				) =>
																					's'
																			),
																			times(
																				Math.abs(
																					5 -
																						values
																							.relationship2
																							.hearts
																				),
																				(
																					_n
																				) =>
																					'r'
																			)
																		),
																		5
																	).map(
																		(n) => (
																			<i
																				className={`fa${n} fa-heart`}
																			/>
																		)
																	)}
																</span>
																•
															</div>
															<div
																className="flex-grow-1 flex-column justify-content-center text-center font-italic"
																style={{
																	fontSize: 13,
																}}
															>
																<p>
																	{
																		values
																			.relationship2
																			.bio
																	}
																</p>
															</div>
														</div>
														<div className="col-lg-auto mt-3 mt-lg-0 mr-lg-3 ">
															<div
																className="bg-secondary"
																style={{
																	minWidth: 150,
																	height: '100%',
																	paddingBottom:
																		'100%',
																	backgroundImage: `url(${values.relationship2.imageUrl})`,
																	backgroundSize:
																		'cover',
																	backgroundPosition:
																		'center',
																	borderRadius:
																		'5px 5px 5px 85px',
																}}
															/>
														</div>
													</div>
												</div>
											</div>
											{/* SMALL LINKS (RIGHT) ================*/}
											<div className="col-lg-auto flex-column justify-content-center">
												<div
													className="card p-2 mb-3 border-0"
													style={{
														borderRadius:
															'15px 65px 65px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters h-100">
														<div className="col align-self-center mx-2">
															<p className="mb-0">
																<a
																	href={
																		values
																			.miniRelationship1
																			.characterUrl
																	}
																	className="text-body"
																	style={{
																		fontSize: 20,
																		letterSpacing: 1,
																		fontVariant:
																			'small-caps',
																	}}
																>
																	{
																		values
																			.miniRelationship1
																			.name
																	}{' '}
																</a>
																<i
																	className="fas fa-question text-success"
																	style={{
																		fontSize: 16,
																	}}
																/>
																{/* little decorative icon. pick one that matches the character! */}
															</p>
															<hr className="my-1" />
															<div className="row no-gutters">
																<div className="col mr-3 text-monospace text-muted">
																	{
																		values
																			.miniRelationship1
																			.relationship
																	}
																</div>
																<div className="col-auto text-success">
																	{take(
																		concat(
																			times(
																				values
																					.miniRelationship1
																					.hearts,
																				(
																					_n
																				) =>
																					's'
																			),
																			times(
																				Math.abs(
																					5 -
																						values
																							.miniRelationship1
																							.hearts
																				),
																				(
																					_n
																				) =>
																					'r'
																			)
																		),
																		5
																	).map(
																		(n) => (
																			<i
																				className={`fa${n} fa-heart`}
																			/>
																		)
																	)}
																</div>
															</div>
														</div>
														<div className="col-auto">
															<div
																className="bg-success"
																style={{
																	width: 100,
																	height: '100%',
																	paddingBottom:
																		'100%',
																	backgroundImage: `url(${values.miniRelationship1.imageUrl})`,
																	backgroundSize:
																		'cover',
																	backgroundPosition:
																		'center',
																	borderRadius: 50,
																}}
															/>
														</div>
													</div>
												</div>
												{/*====================================*/}
												<div
													className="card p-2 mb-3 mr-lg-4 border-0"
													style={{
														borderRadius:
															'15px 65px 65px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters h-100">
														<div className="col align-self-center mx-2">
															<p className="mb-0">
																<a
																	href={
																		values
																			.miniRelationship2
																			.characterUrl
																	}
																	className="text-body"
																	style={{
																		fontSize: 20,
																		letterSpacing: 1,
																		fontVariant:
																			'small-caps',
																	}}
																>
																	{
																		values
																			.miniRelationship2
																			.name
																	}{' '}
																</a>
																<i
																	className="fas fa-question text-success"
																	style={{
																		fontSize: 16,
																	}}
																/>
															</p>
															<hr className="my-1" />
															<div className="row no-gutters">
																<div className="col mr-3 text-monospace text-muted">
																	{
																		values
																			.miniRelationship1
																			.relationship
																	}
																</div>
																<div className="col-auto text-success">
																	{take(
																		concat(
																			times(
																				values
																					.miniRelationship2
																					.hearts,
																				(
																					_n
																				) =>
																					's'
																			),
																			times(
																				Math.abs(
																					5 -
																						values
																							.miniRelationship2
																							.hearts
																				),
																				(
																					_n
																				) =>
																					'r'
																			)
																		),
																		5
																	).map(
																		(n) => (
																			<i
																				className={`fa${n} fa-heart`}
																			/>
																		)
																	)}
																</div>
															</div>
														</div>
														<div className="col-auto">
															<div
																className="bg-secondary"
																style={{
																	width: 100,
																	height: '100%',
																	paddingBottom:
																		'100%',
																	backgroundImage: `url(${values.miniRelationship1.imageUrl})`,
																	backgroundSize:
																		'cover',
																	backgroundPosition:
																		'center',
																	borderRadius: 50,
																}}
															/>
														</div>
													</div>
												</div>
												{/*====================================*/}
												<div
													className="card p-2 mb-4 mr-lg-5 border-0"
													style={{
														borderRadius:
															'15px 65px 65px 15px',
														boxShadow:
															'0 0 10px rgba(0,0,0,.4)',
													}}
												>
													<div className="row no-gutters h-100">
														<div className="col align-self-center mx-2">
															<p className="mb-0">
																<a
																	href={
																		values
																			.miniRelationship1
																			.characterUrl
																	}
																	className="text-body"
																	style={{
																		fontSize: 20,
																		letterSpacing: 1,
																		fontVariant:
																			'small-caps',
																	}}
																>
																	{
																		values
																			.miniRelationship1
																			.name
																	}{' '}
																</a>
																<i
																	className="fas fa-question text-success"
																	style={{
																		fontSize: 16,
																	}}
																/>
															</p>
															<hr className="my-1" />
															<div className="row no-gutters">
																<div className="col mr-3 text-monospace text-muted">
																	{
																		values
																			.miniRelationship1
																			.relationship
																	}
																</div>
																<div className="col-auto text-success">
																	{take(
																		concat(
																			times(
																				values
																					.miniRelationship3
																					.hearts,
																				(
																					_n
																				) =>
																					's'
																			),
																			times(
																				Math.abs(
																					5 -
																						values
																							.miniRelationship3
																							.hearts
																				),
																				(
																					_n
																				) =>
																					'r'
																			)
																		),
																		5
																	).map(
																		(n) => (
																			<i
																				className={`fa${n} fa-heart`}
																			/>
																		)
																	)}
																</div>
															</div>
														</div>
														<div className="col-auto">
															<div
																className="bg-success"
																style={{
																	width: 100,
																	height: '100%',
																	paddingBottom:
																		'100%',
																	backgroundImage: `url(${values.miniRelationship1.imageUrl})`,
																	backgroundSize:
																		'cover',
																	backgroundPosition:
																		'center',
																	borderRadius: 50,
																}}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* CREDIT =============================*/}
										<div className="row no-gutters justify-content-end mr-n5 mb-n5">
											<div className="col-auto">
												<div
													className="card p-2 pt-3 pl-3 border-0"
													style={{
														width: 'auto',
														fontSize: 18,
														borderRadius:
															'40px 0 12px 0',
													}}
												>
													<a
														href="https://toyhou.se/Togo"
														className="text-success"
													>
														<i className="fal fa-code" />
													</a>
												</div>
											</div>
										</div>
									</div>
									{/* ### END ### */}
								</PageSegment>
							</div>
						</div>
						<PageSegment>
							<h2>Results</h2>
							<pre className="bg-dark text-white tw-p-6 tw-rounded-md tw-select-all">
								<code>{`<!--==========================================

    [06] PATH by TOGO

    ${Globals.watermark}
    
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
    anything you need to edit should be
    tabbed and clearly marked - i've also
    added comments for light code edits you 
    may want to do. feel free to change
    any themed elements to your needs!
    -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    > do not use with WYSIWYG on, it will
      break the code.
    > keep my credit in.
    > direct any questions to my comments,
      PMs or discord. thank you!

===========================================-->

<!-- MAIN CONTAINER =======================-->

<div class="mx-auto my-5 p-5" style="max-width: 1000px; 

    background-image: url(${values.images.background}); 
    background-size: cover;
    /* | background image - change background-size to a pixel value if you're using a seamless pattern */;

background-position: center; border-radius: 15px;">
<div class="row justify-content-center">
<div class="col-auto order-lg-1 flex-column">

<!-- ICON + NAME (MIDDLE) CARD ============-->

<div class="card mb-4 p-3 border-0" style="flex: 1 1 0; max-width: 232px; border-radius: 116px 116px 15px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<img class="bg-success rounded-circle" 

    src="${values.images.profile}" style="width: 200px;">
    <!-- icon - 200x200 looks best -->
    
<p class="mt-3 mb-0 text-center text-success" style="font-size: 22px; letter-spacing: 1px; font-variant: small-caps;">
    
    ${values.profile.name}

</p>
<div class="row no-gutters align-items-center my-1">
<div class="col">
<hr class="m-0">
</div>
<div class="col-auto">
  
    <i class="fad fa-seedling mx-3 text-success"></i>

</div>
<div class="col">
<hr class="m-0">
</div>
</div>
<p class="text-center text-muted">
    
    ${values.profile.adjective}

</p>
<hr class="w-100 my-3">

<!-- MUSIC PLAYER =======================-->

<div style="position: relative; height: 100px; border-radius: 10px; overflow: hidden;">
<iframe width="200" height="300" 

    src="https://www.youtube.com/embed/${
		values.profile.youtubeCode
	}?controls=0" frameborder="0" style="position: absolute; top: -100px;"></iframe>
    <!-- replace with youtube embed, keep ?controls=0 at the end -->
    
</div>
</div>
</div>
<div class="col-lg flex-column mt-lg-5 pt-lg-5">
  
<!-- FIELDS (LEFT) CARD ====================
 
  > you can edit the names and values of
    fields, but keep the amount the same -
    if they're not the cards will end up 
    with empty spaces at the bottom.
    
=========================================-->

<div class="card mt-lg-5 mb-4 p-3 text-monospace text-muted border-0" style="flex: 1 1 0; border-radius: 60px 15px 15px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<hr class="m-0" style="position: absolute; top: 32px; right: 64px; left: 40px;">
<p class="text-right mb-1">

    <i class="fad fa-tree-alt text-success" style="font-size: 32px;"></i>

</p>
<div class="row no-gutters align-items-center">
<div class="col text-success">
    
    NICKNAME

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.nickname}

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    AGE

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.age}

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    GENDER

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.gender}

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    ORIENTATION

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.orientation}

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    OCCUPATION

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.occupation}

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    ROLE

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.role}

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    STATUS

</div>
<div class="col-auto mx-2 text-success">
•
</div>
<div class="col text-right">

    ${values.properties.status}

</div>
</div>
</div>
</div>
<div class="col-lg order-lg-2 flex-column mt-lg-5 pt-lg-5">

<!-- PERSONALITY BARS (RIGHT) CARD =========
 
  > like fields you can edit the names on
    the sides of the progress bars, but 
    keep the same amount !
  
=========================================-->

<div class="card mt-lg-5 mb-4 p-3 text-monospace text-muted border-0" style="flex: 1 1 0; font-size: 18px; font-variant: small-caps; border-radius: 15px 60px 15px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<hr class="m-0" style="position: absolute; top: 32px; right: 40px; left: 64px;">
<p>

    <i class="fad fa-acorn text-success" style="font-size: 32px;"></i>

</p>
<div class="row no-gutters align-items-center">
<div class="col text-truncate">
    
    reserved

</div>
<div class="col-6">
<div class="progress mt-1 mx-2 rounded-0" style="height: 2px; overflow: visible;">
<div class="progress-bar" style="height: 100%; 

    width: ${values.alignments.reserved}%; 

background-color: transparent;"></div>
<div class="bg-success" style="height: 8px; width: 8px; margin: -3px 0 0 -4px; border-radius: 50%;"></div>
</div>
</div>
<div class="col text-right text-truncate">

    friendly

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-truncate">

    immature

</div>
<div class="col-6">
<div class="progress mt-1 mx-2 rounded-0" style="height: 2px; overflow: visible;">
<div class="progress-bar" style="height: 100%; 
    
    width: ${values.alignments.immature}%; 

background-color: transparent;"></div>
<div class="bg-success" style="height: 8px; width: 8px; margin: -3px 0 0 -4px; border-radius: 50%;"></div>
</div>
</div>
<div class="col text-right text-truncate">
    
    serious

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-truncate">

    timid

</div>
<div class="col-6">
<div class="progress mt-1 mx-2 rounded-0" style="height: 2px; overflow: visible;">
<div class="progress-bar" style="height: 100%; 

    width: ${values.alignments.timid}%; 

background-color: transparent;"></div>
<div class="bg-success" style="height: 8px; width: 8px; margin: -3px 0 0 -4px; border-radius: 50%;"></div>
</div>
</div>
<div class="col text-right text-truncate">

    brave

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-truncate">

    sincere

</div>
<div class="col-6">
<div class="progress mt-1 mx-2 rounded-0" style="height: 2px; overflow: visible;">
<div class="progress-bar" style="height: 100%; 

    width: ${values.alignments.sincere}%; 

background-color: transparent;"></div>
<div class="bg-success" style="height: 8px; width: 8px; margin: -3px 0 0 -4px; border-radius: 50%;"></div>
</div>
</div>
<div class="col text-right text-truncate">
    
    deceptive

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-truncate">
  
    sensitive

</div>
<div class="col-6">
<div class="progress mt-1 mx-2 rounded-0" style="height: 2px; overflow: visible;">
<div class="progress-bar" style="height: 100%; 

    width: ${values.alignments.sensitive}%; 
    
background-color: transparent;"></div>
<div class="bg-success" style="height: 8px; width: 8px; margin: -3px 0 0 -4px; border-radius: 50%;"></div>
</div>
</div>
<div class="col text-right text-truncate">
    
    tough

</div>
</div>
<hr class="w-100 my-2">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-truncate">

    lazy

</div>
<div class="col-6">
<div class="progress mt-1 mx-2 rounded-0" style="height: 2px; overflow: visible;">
<div class="progress-bar" style="height: 100%; 

    width: ${values.alignments.lazy}%; 

background-color: transparent;"></div>
<div class="bg-success" style="height: 8px; width: 8px; margin: -3px 0 0 -4px; border-radius: 50%;"></div>
</div>
</div>
<div class="col text-right text-truncate">
    
    diligent

</div>
</div>
</div>
</div>
</div>

<!-- MOODBOARD ==========================-->

<div class="card p-2 mb-5 border-0" style="border-radius: 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters">
<div class="col-6 col-lg-3 p-2">
<div class="w-100 bg-faded" style="padding-bottom: 100%; 

    background-image: url(${values.moodboard.one}); 

background-size: cover; background-position: center; border-radius: 8px;"></div>
</div>
<div class="col-6 col-lg-3 p-2">
<div class="w-100 bg-faded" style="padding-bottom: 100%; 

    background-image: url(${values.moodboard.two}); 

background-size: cover; background-position: center; border-radius: 8px;"></div>
</div>
<div class="col-6 col-lg-3 p-2">
<div class="w-100 bg-faded" style="padding-bottom: 100%; 

    background-image: url(${values.moodboard.three}); 
    
background-size: cover; background-position: center; border-radius: 8px;"></div>
</div>
<div class="col-6 col-lg-3 p-2">
<div class="w-100 bg-faded" style="padding-bottom: 100%; 

    background-image: url(${values.moodboard.four}); 
    
background-size: cover; background-position: center; border-radius: 8px;"></div>
</div>
</div>
</div>

<!-- HISTORY ============================-->

<div class="row flex-lg-row-reverse my-4">
<div class="col-lg-auto text-center">

    <img src="${values.history.image}" class="mb-4" style="max-width: 300px;" >
    <!-- pagedoll - looks best transparent -->

</div>
<div class="col-lg flex-column">
<div class="card d-block d-lg-flex mb-4 p-3 border-0" style="flex: 1 1 0; border-radius: 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters align-items-center mb-2">
<div class="col-auto">
<p class="text-success mt-n2" style="font-size: 28px; letter-spacing: 1px; font-variant: small-caps;">
      
    history

</p>
</div>
<div class="col">
<hr class="my-0 mx-3">
</div>
<div class="col-auto">
  
    <i class="fad fa-tree-large text-success" style="font-size: 24px;"></i>

</div>
</div>
<div style="flex: 1 1 0; overflow-y: auto;">
  
    ${values.history.body
		.split('\n')
		.map((item) => `<p>${item}</p>`)
		.join('')}

</div>
<p class="mt-3 text-monospace text-right text-success"><i>
  
    ${values.history.quote}

</i></p>
</div>
</div>
</div>

<!-- DESIGN =============================-->

<div class="row justify-content-center align-items-center">
<div class="col-lg-auto order-lg-1 text-center">
  
    <img src="${
		values.images.fullbody
	}" class="w-100 mb-4" style="max-width: 550px;">
    <!-- main fullbody image - looks best transparent -->

</div>
<div class="col-auto order-lg-2">
    
<!-- COLOUR SCHEME ======================-->

<div class="card flex-row flex-lg-column p-2 mb-4 border-0" style="border-radius: 30px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="mr-2 mr-lg-0 mb-lg-2" style="

    background-color: ${values.design.colors.one}; 

width: 40px; height: 40px; border-radius: 50%;"></div>
<div class="mr-2 mr-lg-0 mb-lg-2" style="

    background-color: ${values.design.colors.two}; 

width: 40px; height: 40px; border-radius: 50%;"></div>
<div class="mr-2 mr-lg-0 mb-lg-2" style="

    background-color: ${values.design.colors.three}; 

width: 40px; height: 40px; border-radius: 50%;"></div>
<div class="mr-2 mr-lg-0 mb-lg-2" style="

    background-color: ${values.design.colors.four}; 

width: 40px; height: 40px; border-radius: 50%;"></div>
<div style="

    background-color: ${values.design.colors.five}; 

width: 40px; height: 40px; border-radius: 50%;"></div>
</div>
    
</div>
<div class="col-lg">

<!-- DESIGN DETAILS + NOTES =============-->

<div class="card mb-2 p-3 text-monospace border-0" style="border-radius: 25px 25px 5px 5px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters align-items-center">
<div class="col text-success">

    HEIGHT

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.height}

</div>
</div>
<hr class="w-100 my-1">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    WEIGHT

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.weight}

</div>
</div>
<hr class="w-100 my-1">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    BUILD

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.build}

</div>
</div>
<hr class="w-100 my-1">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    SPECIES

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.species}

</div>
</div>
</div>
<!--====================================-->
<div class="card mb-4 p-3 text-monospace border-0" style="border-radius: 5px 5px 25px 25px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters align-items-center">
<div class="col text-success">

    HAIR

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.hair}

</div>
</div>
<hr class="w-100 my-1">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    SKIN

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.skin}

</div>
</div>
<hr class="w-100 my-1">
<!--====================================-->
<div class="row no-gutters align-items-center">
<div class="col text-success">

    EYES

</div>
<div class="col-auto mx-2 text-success">
//
</div>
<div class="col text-right">

    ${values.traits.eyes}

</div>
</div>
</div>
<div class="card mb-4 p-3 border-0" style="border-radius: 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<p class="mt-n2 text-monospace text-success" style="font-size: 20px; letter-spacing: 1px; font-variant: small-caps;">
  
      design notes

</p>
<ul class="mb-0 pl-3">

    ${values.design.notes
		.map(
			(item) => `<li class="text-success">
    <span class="text-body">
      ${item.value}
    </span>
  </li>`
		)
		.join('\n')}
    
</ul>
</div>
<div class="row no-gutters mb-4" style="height: 50px;">
<div class="col-auto mr-2">
  
<!-- DESIGNER CREDIT + WORTH ============-->
  
<a 

    href="${values.design.authorUrl}" 
    
    title="Designers Page" 
    
data-toggle="tooltip" data-placement="bottom" class="btn btn-success d-flex justify-content-center align-items-center" style="height: 50px; width: 50px; font-size: 18px; border-radius: 25px 5px 5px 25px; box-shadow: 0 0 10px rgba(0,0,0,.4);">

    <i class="fad fa-pencil-ruler"></i>

</a>
</div>
<div class="col">
<div class="card px-3 text-monospace text-success border-0" style="height: 50px; border-radius: 5px 25px 25px 5px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters align-items-center h-100">
<div class="col">
<hr class="m-0" style="margin-bottom: -2px; border-width: 4px; border-top-style: dotted;">
</div>
<div class="col-auto ml-3">
  
    WORTH ${values.design.worth}

</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- PERSONALITY ========================-->

<div class="row my-4">
<div class="col-lg-auto text-center">
  
    <img src="${
		values.personality.image
	}" class="mb-4" style="max-width: 300px;">
    <!-- pagedoll - looks best transparent -->
    
</div>
<div class="col-lg flex-column">
<div class="card d-block d-lg-flex mb-4 p-3 border-0" style="flex: 1 1 0; border-radius: 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<p class="mb-2 text-monospace text-success"><i>
  
    ${values.personality.subheader}
    
</i></p>
<div style="flex: 1 1 0; overflow-y: auto;">
  
    ${values.personality.body
		.split('\n')
		.map((item) => `<p>${item}</p>`)
		.join('')}
    
</div>
<div class="row no-gutters align-items-center mt-2 mb-n1">
<div class="col-auto">
  
    <i class="fad fa-leaf-oak text-success" style="font-size: 24px;"></i>

</div>
<div class="col">
<hr class="my-0 mx-3">
</div>
<div class="col-auto">
<p class="text-success mt-n2" style="font-size: 28px; letter-spacing: 1px; font-variant: small-caps;">
  
    personality
  
</p>
</div>
</div>
</div>
</div>
</div>
<div class="row">

<!-- BIG LINKS (LEFT) ===================-->

<div class="col-lg flex-column">
<div class="card flex-grow-1 p-3 mb-3 ml-lg-4 border-0" style="border-radius: 100px 15px 15px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters">
<div class="col-lg-auto mb-3 mb-lg-0 mr-lg-3">
<div class="bg-success" style="min-width: 150px; height: 100%; padding-bottom: 100%; 

    background-image: url(${values.relationship1.imageUrl});
    /* icon */;
    
background-size: cover; background-position: center; border-radius: 85px 5px 5px 5px;"></div>
</div>
<div class="col flex-column">
<div class="row no-gutters align-items-center">
<div class="col-auto mt-n2 mr-3">

    <a href="${
		values.relationship1.characterUrl
	}" class="text-body" style="font-size: 20px; letter-spacing: 1px; font-variant: small-caps;">
      ${values.relationship1.name}
    </a>
    
</div>
<div class="col text-monospace text-right text-muted">
    
    ${values.relationship1.relationship}

</div>
</div>
<hr class="w-100 my-1">
<div class="text-center text-success">
•

    <!-- relationship level - fas are filled hearts, far are empty -->
    <span class="mx-2">
      ${take(
			concat(
				times(values.relationship1.hearts, (_n) => 's'),
				times(Math.abs(5 - values.relationship1.hearts), (_n) => 'r')
			),
			5
		).map((n) => `<i class="fa${n} fa-heart"></i>`)}
    </span>

•
</div>
<div class="flex-grow-1 flex-column justify-content-center text-center font-italic" style="font-size: 13px;">
    
    <p>
      ${values.relationship1.bio}
    </p>
    
</div>
</div>
</div>
</div>
<!--====================================-->
<div class="card flex-grow-1 p-3 mb-4 border-0" style="border-radius: 15px 15px 15px 100px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row flex-lg-row-reverse no-gutters">
<div class="col flex-column">
<div class="row no-gutters align-items-center">
<div class="col-auto mt-n2 mr-3">
    
    <a href="${
		values.relationship2.characterUrl
	}" class="text-body" style="font-size: 20px; letter-spacing: 1px; font-variant: small-caps;">
      ${values.relationship2.name}
    </a>
    
</div>
<div class="col text-monospace text-right text-muted">
    
    ${values.relationship2.relationship}

</div>
</div>
<hr class="w-100 my-1">
<div class="text-center text-success">
•

    <span class="mx-2">
    ${take(
		concat(
			times(values.relationship2.hearts, (_n) => 's'),
			times(Math.abs(5 - values.relationship2.hearts), (_n) => 'r')
		),
		5
	).map((n) => `<i class="fa${n} fa-heart"></i>`)}
    </span>

•
</div>
<div class="flex-grow-1 flex-column justify-content-center text-center font-italic" style="font-size: 13px;">
  
    <p>
      ${values.relationship2.bio}
    </p>

</div>
</div>
<div class="col-lg-auto mt-3 mt-lg-0 mr-lg-3 ">
<div class="bg-secondary" style="min-width: 150px; height: 100%; padding-bottom: 100%; 
    
    background-image: url(${values.relationship2.imageUrl}); 
    
background-size: cover; background-position: center; border-radius: 5px 5px 5px 85px;"></div>
</div>
</div>
</div>
</div>

<!-- SMALL LINKS (RIGHT) ================-->

<div class="col-lg-auto flex-column justify-content-center">
<div class="card p-2 mb-3 border-0" style="border-radius: 15px 65px 65px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters h-100">
<div class="col align-self-center mx-2">
<p class="mb-0">
    
    <a href="${
		values.miniRelationship1.characterUrl
	}" class="text-body" style="font-size: 20px; letter-spacing: 1px; font-variant: small-caps;">
      ${values.miniRelationship1.name}
    </a>
    
    <i class="fad fa-leaf text-success" style="font-size: 16px;"></i>
    <!-- little decorative icon. pick one that matches the character! -->
    
</p>
<hr class="my-1">
<div class="row no-gutters">
<div class="col mr-3 text-monospace text-muted">
    
  ${values.miniRelationship1.relationship}
    
</div>
<div class="col-auto text-success">
  
    ${take(
		concat(
			times(values.miniRelationship1.hearts, (_n) => 's'),
			times(Math.abs(5 - values.miniRelationship1.hearts), (_n) => 'r')
		),
		5
	).map((n) => `<i class="fa${n} fa-heart"></i>`)}
    
</div>
</div>
</div>
<div class="col-auto">
<div class="bg-success" style="width: 100px; height: 100%; padding-bottom: 100%; 

    background-image: url(${values.miniRelationship1.imageUrl}); 
    /* icon */;
    
background-size: cover; background-position: center; border-radius: 50px;"></div>
</div>
</div>
</div>
<!--====================================-->
<div class="card p-2 mb-3 mr-lg-4 border-0" style="border-radius: 15px 65px 65px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters h-100">
<div class="col align-self-center mx-2">
<p class="mb-0">
    
    <a href="${
		values.miniRelationship2.characterUrl
	}" class="text-body" style="font-size: 20px; letter-spacing: 1px; font-variant: small-caps;">
      ${values.miniRelationship2.name}
    </a>
    
    <i class="fad fa-flower text-success" style="font-size: 16px;"></i>

</p>
<hr class="my-1">
<div class="row no-gutters">
<div class="col mr-3 text-monospace text-muted">

    ${values.miniRelationship2.relationship}

</div>
<div class="col-auto text-success">
  
    ${take(
		concat(
			times(values.miniRelationship2.hearts, (_n) => 's'),
			times(Math.abs(5 - values.miniRelationship2.hearts), (_n) => 'r')
		),
		5
	).map((n) => `<i class="fa${n} fa-heart"></i>`)}

</div>
</div>
</div>
<div class="col-auto">
<div class="bg-secondary" style="width: 100px; height: 100%; padding-bottom: 100%; 

    background-image: url(${values.miniRelationship2.imageUrl}); 
    
background-size: cover; background-position: center; border-radius: 50px;"></div>
</div>
</div>
</div>
<!--====================================-->
<div class="card p-2 mb-4 mr-lg-5 border-0" style="border-radius: 15px 65px 65px 15px; box-shadow: 0 0 10px rgba(0,0,0,.4);">
<div class="row no-gutters h-100">
<div class="col align-self-center mx-2">
<p class="mb-0">
    
    <a href="${
		values.miniRelationship3.characterUrl
	}" class="text-body" style="font-size: 20px; letter-spacing: 1px; font-variant: small-caps;">
      ${values.miniRelationship3.name}
    </a>
    
    <i class="fad fa-wheat text-success" style="font-size: 16px;"></i>

</p>
<hr class="my-1">
<div class="row no-gutters">
<div class="col mr-3 text-monospace text-muted">
    
    ${values.miniRelationship3.relationship}  

</div>
<div class="col-auto text-success">
  
    ${take(
		concat(
			times(values.miniRelationship3.hearts, (_n) => 's'),
			times(Math.abs(5 - values.miniRelationship3.hearts), (_n) => 'r')
		),
		5
	).map((n) => `<i class="fa${n} fa-heart"></i>`)}

</div>
</div>
</div>
<div class="col-auto">
<div class="bg-success" style="width: 100px; height: 100%; padding-bottom: 100%; 

    background-image: url(${values.miniRelationship3.imageUrl}); 
    
background-size: cover; background-position: center; border-radius: 50px;"></div>
</div>
</div>
</div>
</div>
</div>
<!-- CREDIT =============================-->
<div class="row no-gutters justify-content-end mr-n5 mb-n5">
<div class="col-auto">
<div class="card p-2 pt-3 pl-3 border-0" style="width: auto; font-size: 18px; border-radius: 40px 0 12px 0;">
<a href="https://toyhou.se/Togo" class="text-success">
<i class="fal fa-code"></i>
</a>
</div>
</div>
</div>
<!-- ${Globals.watermark} -->
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
