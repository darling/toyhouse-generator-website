import { Disclosure } from '@headlessui/react';
import { FieldArray, Formik } from 'formik';
import { startCase } from 'lodash';
import React from 'react';

import {
	FormColorInput,
	FormInput,
	FormLongInput,
} from '../../components/FormGroups';
import { PageSegment } from '../../components/PageSegment';
import { Meta } from '../../layout/Meta';
import { TemplatePage } from '../../templates/TemplatePage';
import { Globals } from '../../utils/AppConfig';

const templateInfo = {
	title: 'Luna',
	author: '8Byte',
  authorUrl: 'https://toyhou.se/8byte',
	description: '',
	url: 'https://toyhou.se/11686775.-f2u-luna',
  policyUrl: 'https://toyhou.se/~forums/16.htmlcss-graphics/192248.-friede99tarts-codes-'
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
					name: 'Luna',
					color1: '#000',
					color2: '#000',
					color3: '#000',
					color4: '#000',
					nickname: 'Nickname',
					gender: 'Gender',
					pronouns: 'Pronouns',
					birthday: 'B-day',
					species: 'Species',
					occupation: 'Occupation',
					residence: 'Residence',
					summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
					backstory: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
					personality: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
					photos: {
						cutieMark: '/img/placeholder-transparent.png',
						banner: '/img/placeholder-solid.png',
						profile: '/img/placeholder.png',
					},
					relationships: {
						one: {
							name: 'Name',
							relationship: 'Relationship',
							link: 'https://toyhou.se/',
							imageUrl: '/img/placeholder.png',
						},
						two: {
							name: 'Name',
							relationship: 'Relationship',
							link: 'https://toyhou.se/',
							imageUrl: '/img/placeholder.png',
						},
						three: {
							name: 'Name',
							relationship: 'Relationship',
							link: 'https://toyhou.se/',
							imageUrl: '/img/placeholder.png',
						},
						four: {
							name: 'Name',
							relationship: 'Relationship',
							link: 'https://toyhou.se/',
							imageUrl: '/img/placeholder.png',
						},
					},
					list: [{ value: 'Design Note' }, { value: 'Design Note' }],
				}}
				onSubmit={() => {}}
			>
				{({ values, initialValues }) => (
					<>
						<div className="tw-flex tw-flex-col lg:tw-flex-row tw-px-4 tw-mx-auto">
							<div className="tw-mr-0 lg:tw-mr-4 lg:tw-w-1/3">
								<h2>Form</h2>
								<FormInput for="name" />
								<div className="tw-flex tw-flex-row tw-space-x-4">
									<FormColorInput for="color1" />
									<FormColorInput for="color2" />
									<FormColorInput for="color3" />
									<FormColorInput for="color4" />
								</div>
								<h3>Bio</h3>
								<FormLongInput for="summary" />
								<FormLongInput for="backstory" />
								<FormLongInput for="personality" />
								<h3>Properties</h3>
								<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
									<FormInput for="nickname" />
									<FormInput for="gender" />
									<FormInput for="pronouns" />
									<FormInput for="birthday" />
									<FormInput for="species" />
									<FormInput for="occupation" />
									<FormInput for="residence" />
								</div>
								<h3>Images</h3>
								<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
									<FormInput for="photos.cutieMark" />
									<FormInput for="photos.banner" />
								</div>
								<h3>Relationships</h3>
								{Object.keys(initialValues.relationships).map(
									(key) => {
										return (
											<Disclosure key={key}>
												{({ open }) => (
													<>
														<Disclosure.Button
															as="div"
															className="tw-flex tw-mb-4 tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-left tw-text-indigo-900 tw-bg-indigo-100 tw-rounded-lg hover:tw-bg-indigo-200 focus:tw-outline-none focus-visible:tw-ring focus-visible:tw-ring-indigo-500 focus-visible:tw-ring-opacity-75"
														>
															<span>
																{startCase(key)}
															</span>
															{open ? '-' : '+'}
														</Disclosure.Button>
														<Disclosure.Panel>
															<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-4">
																<FormInput
																	for={`relationships.${key}.name`}
																/>
																<FormInput
																	for={`relationships.${key}.relationship`}
																/>
																<FormInput
																	for={`relationships.${key}.link`}
																/>
																<FormInput
																	for={`relationships.${key}.imageUrl`}
																/>
															</div>
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										);
									}
								)}
								<h3>Rightside List</h3>
								<FieldArray name="list">
									{({ remove, push }) => (
										<div>
											{values.list.length > 0 &&
												values.list.map(
													(item, index) => (
														<div key={item.value + index} className="my-4">
															<FormInput
																for={`list[${index}].value`}
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
																{item.value}
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
							</div>
							<div>
								<h2>Preview</h2>
								<PageSegment>
									{/* ### START ### */}
									<div className="container p-0 w-100">
										{/*- header image -*/}
										<div className="p-1">
											<div
												className="container w-100"
												style={{
													background: `url(${values.photos.banner})`,
													backgroundSize: 'cover',
													backgroundPosition:
														'center',
													height: 250,
												}}
											></div>
										</div>
										{/*- palette -*/}
										<div
											className="row no-gutters"
											style={{ flexWrap: 'wrap' }}
										>
											<div className="col p-1">
												<div
													style={{
														background:
															values.color1,
														height: 50,
														minWidth: 150,
													}}
												/>
											</div>
											<div className="col p-1">
												<div
													style={{
														background:
															values.color2,
														height: 50,
														minWidth: 150,
													}}
												/>
											</div>
											<div className="col p-1">
												<div
													style={{
														background:
															values.color3,
														height: 50,
														minWidth: 150,
													}}
												/>
											</div>
											<div className="col p-1">
												<div
													style={{
														background:
															values.color4,
														height: 50,
														minWidth: 150,
													}}
												/>
											</div>
										</div>
										{/*- main content -*/}
										<div className="row no-gutters">
											<div className="order-md-1 order-1 col-md-3 col-6 p-1">
												{/*- profile picture -*/}
												<div
													className="w-100 mb-2"
													style={{
														background: `url(${values.photos.profile})`,
														backgroundSize: 'cover',
														paddingTop: '100%',
													}}
												/>
												{/*- name -*/}
												<div className="container p-2 mb-2 bg-left bg-faded">
													<h1>{values.name}</h1>
												</div>
												{/*- info boxes -*/}
												<div
													className="container overflow-auto p-2 mb-2"
													style={{ height: 260 }}
												>
													{/*- info 1 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Nickname
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{
																	values.nickname
																}
															</strong>
														</div>
													</div>
													{/*- info 2 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Gender
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{values.gender}
															</strong>
														</div>
													</div>
													{/*- info 3 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Pronouns
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{
																	values.pronouns
																}
															</strong>
														</div>
													</div>
													{/*- info 4 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Birthday
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{
																	values.birthday
																}
															</strong>
														</div>
													</div>
													{/*- info 5 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Species
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{values.species}
															</strong>
														</div>
													</div>
													{/*- info 6 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Occupation
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{
																	values.occupation
																}
															</strong>
														</div>
													</div>
													{/*- info 7 -*/}
													<div className="row no-gutters mb-1">
														<div className="order-md-1 order-2 col-md-6 col-12 p-1">
															Residence
														</div>
														<div className="order-md-2 order-1 col-md-6 col-12 p-1 text-right bg-right bg-faded">
															<strong>
																{
																	values.residence
																}
															</strong>
														</div>
													</div>
													{/*- end info -*/}
												</div>
											</div>
											<div className="order-md-2 order-3 col-md-6 col-12 p-1">
												{/*- summary -*/}
												<div
													className="container p-2 mb-2"
													style={{ height: 181 }}
												>
													<h1>i. summary</h1>
													<div
														className="overflow-auto"
														style={{ height: 150 }}
													>
														{values.summary
															.split('\n')
															.map((c) => (
																<p key={c}>
																	{c}
																</p>
															))}
													</div>
												</div>
												{/*- backstory -*/}
												<div
													className="container p-2 mb-2"
													style={{ height: 181 }}
												>
													<h1>ii. backstory</h1>
													<div
														className="overflow-auto"
														style={{ height: 150 }}
													>
														{values.backstory
															.split('\n')
															.map((c) => (
																<p key={c}>
																	{c}
																</p>
															))}
													</div>
												</div>
												{/*- personality -*/}
												<div
													className="container p-2 mb-2"
													style={{ height: 181 }}
												>
													<h1>iii. personality</h1>
													<div
														className="overflow-auto"
														style={{ height: 150 }}
													>
														{values.personality
															.split('\n')
															.map((c) => (
																<p key={c}>
																	{c}
																</p>
															))}
													</div>
												</div>
											</div>
											<div className="order-md-3 order-2 col-md-3 col-6 p-1">
												<div className="row no-gutters">
													{/*- design notes -*/}
													<div
														className="order-md-1 order-3 container overflow-auto p-2 mb-2"
														style={{ height: 260 }}
													>
														<ul
															className="list-unstyled"
															style={{
																fontSize: 18,
															}}
														>
															{values.list.map(
																(item, index) => (
																	<li
																		key={
																			index + item.value
																		}
																	>
																		<i className="fas fa-moon" />{' '}
																		{
																			item.value
																		}
																	</li>
																)
															)}
														</ul>
													</div>
													{/*- cutie mark -*/}
													<div className="order-md-2 order-1 container p-2 mb-2 bg-left bg-faded">
														<h1>Cutie Mark</h1>
													</div>
													<div
														className="order-md-3 order-2 w-100 mb-2"
														style={{
															background: `url(${values.photos.cutieMark})`,
															backgroundSize:
																'cover',
															paddingTop: '100%',
														}}
													/>
												</div>
											</div>
										</div>
										{/*- relationship -*/}
										<div className="row no-gutters">
											{/*- relation 1 -*/}
											<div
												className="col p-1"
												style={{
													minWidth: 150,
													maxWidth: 300,
												}}
											>
												<a
													href={
														values.relationships.one
															.link
													}
												>
													<div className="text-right p-1 bg-left bg-faded text-faded">
														<h3>
															{
																values
																	.relationships
																	.one.name
															}
														</h3>
													</div>
													<img
														className="w-100"
														src={
															values.relationships
																.one.imageUrl
														}
														style={{
															paddingTop: 0,
														}}
													/>
													<div className="p-1 bg-right bg-faded">
														<h3>
															{
																values
																	.relationships
																	.one
																	.relationship
															}
														</h3>
													</div>
												</a>
											</div>
											{/*- relation 2 -*/}
											<div
												className="col p-1"
												style={{
													minWidth: 150,
													maxWidth: 300,
												}}
											>
												<a
													href={
														values.relationships.two
															.link
													}
												>
													<div className="text-right p-1 bg-left bg-faded text-faded">
														<h3>
															{
																values
																	.relationships
																	.two.name
															}
														</h3>
													</div>
													<img
														className="w-100"
														src={
															values.relationships
																.two.imageUrl
														}
														style={{
															paddingTop: 0,
														}}
													/>
													<div className="p-1 bg-right bg-faded">
														<h3>
															{
																values
																	.relationships
																	.two
																	.relationship
															}
														</h3>
													</div>
												</a>
											</div>
											{/*- relation 3 -*/}
											<div
												className="col p-1"
												style={{
													minWidth: 150,
													maxWidth: 300,
												}}
											>
												<a
													href={
														values.relationships
															.three.link
													}
												>
													<div className="text-right p-1 bg-left bg-faded text-faded">
														<h3>
															{
																values
																	.relationships
																	.three.name
															}
														</h3>
													</div>
													<img
														className="w-100"
														src={
															values.relationships
																.three.imageUrl
														}
														style={{
															paddingTop: 0,
														}}
													/>
													<div className="p-1 bg-right bg-faded">
														<h3>
															{
																values
																	.relationships
																	.three
																	.relationship
															}
														</h3>
													</div>
												</a>
											</div>
											{/*- relation 4 -*/}
											<div
												className="col p-1"
												style={{
													minWidth: 150,
													maxWidth: 300,
												}}
											>
												<a
													href={
														values.relationships
															.four.link
													}
												>
													<div className="text-right p-1 bg-left bg-faded text-faded">
														<h3>
															{
																values
																	.relationships
																	.four.name
															}
														</h3>
													</div>
													<img
														className="w-100"
														src={
															values.relationships
																.four.imageUrl
														}
														style={{
															paddingTop: 0,
														}}
													/>
													<div className="p-1 bg-right bg-faded">
														<h3>
															{
																values
																	.relationships
																	.four
																	.relationship
															}
														</h3>
													</div>
												</a>
											</div>
											{/*- end relations -*/}
										</div>
										<div className="pull-right">
											<a
												className="tooltipster"
												title="layout credits"
												href="https://toyhou.se/TNR"
											>
												<i className="fas fa-star" />
											</a>
											/
											<a
												className="tooltipster"
												title="code credits"
												href="https://toyhou.se/8byte"
											>
												<i className="fas fa-crow" />
											</a>
										</div>
									</div>
									{/* ### END ### */}
								</PageSegment>
							</div>
						</div>
						<PageSegment>
							<h2>Results</h2>
							<pre className="bg-dark text-white tw-p-6 tw-rounded-md tw-select-all">
								<code>{`<div class="container p-0 w-100">
	<!--- ${Globals.watermark} --->
	<!--- header image --->
	<div class="p-1">
		<div
			class="container w-100"
			style="
				background: url(${values.photos.banner});
				background-size: cover;
				background-position: center;
				height: 250px;
			"
		></div>
	</div>
	<!--- palette --->
	<div class="row no-gutters" style="flex-wrap: wrap">
		<div class="col p-1">
			<div
				style="background: ${values.color1}; height: 50px; min-width: 150px;"
			></div>
		</div>
		<div class="col p-1">
			<div
				style="background: ${values.color2}; height: 50px; min-width: 150px;"
			></div>
		</div>
		<div class="col p-1">
			<div
				style="background: ${values.color3}; height: 50px; min-width: 150px;"
			></div>
		</div>
		<div class="col p-1">
			<div
				style="background: ${values.color4}; height: 50px; min-width: 150px;"
			></div>
		</div>
	</div>
	<!--- main content --->
	<div class="row no-gutters">
		<div class="order-md-1 order-1 col-md-3 col-6 p-1">
			<!--- profile picture --->
			<div
				class="w-100 mb-2"
				style="
					background: url(${values.photos.profile});
					background-size: cover;
					padding-top: 100%;
				"
			></div>
			<!--- name --->
			<div class="container p-2 mb-2 bg-left bg-faded">
				<h1>${values.name}</h1>
			</div>
			<!--- info boxes --->
			<div class="container overflow-auto p-2 mb-2" style="height: 260px">
				<!--- info 1 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Nickname
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.nickname}</strong>
					</div>
				</div>
				<!--- info 2 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Gender
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.gender}</strong>
					</div>
				</div>
				<!--- info 3 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Pronouns
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.pronouns}</strong>
					</div>
				</div>
				<!--- info 4 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Birthday
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.birthday}</strong>
					</div>
				</div>
				<!--- info 5 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Species
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.species}</strong>
					</div>
				</div>
				<!--- info 6 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Occupation
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.occupation}</strong>
					</div>
				</div>
				<!--- info 7 --->
				<div class="row no-gutters mb-1">
					<div class="order-md-1 order-2 col-md-6 col-12 p-1">
						Residence
					</div>
					<div
						class="
							order-md-2 order-1
							col-md-6 col-12
							p-1
							text-right
							bg-right bg-faded
						"
					>
						<strong>${values.residence}</strong>
					</div>
				</div>
				<!--- end info --->
			</div>
		</div>
		<div class="order-md-2 order-3 col-md-6 col-12 p-1">
			<!--- summary --->
			<div class="container p-2 mb-2" style="height: 181px">
				<h1>i. summary</h1>
				<div class="overflow-auto" style="height: 150px">
					${values.summary
						.split('\n')
						.map(
							(c) => `
					<p>${c}</p>
					`
						)
						.join('\n')}
				</div>
			</div>
			<!--- backstory --->
			<div class="container p-2 mb-2" style="height: 181px">
				<h1>ii. backstory</h1>
				<div class="overflow-auto" style="height: 150px">
					${values.backstory
						.split('\n')
						.map(
							(c) => `
					<p>${c}</p>
					`
						)
						.join('\n')}
				</div>
			</div>
			<!--- personality --->
			<div class="container p-2 mb-2" style="height: 181px">
				<h1>iii. personality</h1>
				<div class="overflow-auto" style="height: 150px">
					${values.personality
						.split('\n')
						.map(
							(c) => `
					<p>${c}</p>
					`
						)
						.join('\n')}
				</div>
			</div>
		</div>
		<div class="order-md-3 order-2 col-md-3 col-6 p-1">
			<div class="row no-gutters">
				<!--- design notes --->
				<div
					class="order-md-1 order-3 container overflow-auto p-2 mb-2"
					style="height: 260px"
				>
					<ul class="list-unstyled" style="font-size: 18px">
						${values.list
							.map(
								(item) => `
						<li><i class="fas fa-moon"></i> ${item.value}</li>
						`
							)
							.join('\n')}
					</ul>
				</div>
				<!--- cutie mark --->
				<div
					class="
						order-md-2 order-1
						container
						p-2
						mb-2
						bg-left bg-faded
					"
				>
					<h1>Cutie Mark</h1>
				</div>
				<div
					class="order-md-3 order-2 w-100 mb-2"
					style="
						background: url(${values.photos.cutieMark});
						background-size: cover;
						padding-top: 100%;
					"
				></div>
			</div>
		</div>
	</div>
	<!--- relationship --->
	<div class="row no-gutters">
		<!--- relation 1 --->
		<div class="col p-1" style="min-width: 150px; max-width: 300px">
			<a href="${values.relationships.one.link}">
				<div class="text-right p-1 bg-left bg-faded text-faded">
					<h3>${values.relationships.one.name}</h3>
				</div>
				<img
					class="w-100"
					src="${values.relationships.one.imageUrl}"
					style="padding-top: 0"
				/>
				<div class="p-1 bg-right bg-faded">
					<h3>${values.relationships.one.relationship}</h3>
				</div>
			</a>
		</div>
		<!--- relation 2 --->
		<div class="col p-1" style="min-width: 150px; max-width: 300px">
			<a href="${values.relationships.two.link}">
				<div class="text-right p-1 bg-left bg-faded text-faded">
					<h3>${values.relationships.two.name}</h3>
				</div>
				<img
					class="w-100"
					src="${values.relationships.two.imageUrl}"
					style="padding-top: 0"
				/>
				<div class="p-1 bg-right bg-faded">
					<h3>${values.relationships.two.relationship}</h3>
				</div>
			</a>
		</div>
		<!--- relation 3 --->
		<div class="col p-1" style="min-width: 150px; max-width: 300px">
			<a href="${values.relationships.three.link}">
				<div class="text-right p-1 bg-left bg-faded text-faded">
					<h3>${values.relationships.three.name}</h3>
				</div>
				<img
					class="w-100"
					src="${values.relationships.three.imageUrl}"
					style="padding-top: 0"
				/>
				<div class="p-1 bg-right bg-faded">
					<h3>${values.relationships.three.relationship}</h3>
				</div>
			</a>
		</div>
		<!--- relation 4 --->
		<div class="col p-1" style="min-width: 150px; max-width: 300px">
			<a href="${values.relationships.four.link}">
				<div class="text-right p-1 bg-left bg-faded text-faded">
					<h3>${values.relationships.four.name}</h3>
				</div>
				<img
					class="w-100"
					src="${values.relationships.four.imageUrl}"
					style="padding-top: 0"
				/>
				<div class="p-1 bg-right bg-faded">
					<h3>${values.relationships.four.relationship}</h3>
				</div>
			</a>
		</div>
		<!--- end relations --->
	</div>
	<div class="pull-right">
		<!--- ${Globals.watermark} --->
		<a
			class="tooltipster"
			title="layout credits"
			href="https://toyhou.se/TNR"
			><i class="fas fa-star"></i
		></a>
		/
		<a
			class="tooltipster"
			title="code credits"
			href="https://toyhou.se/8byte"
			><i class="fas fa-crow"></i
		></a>
	</div>
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
