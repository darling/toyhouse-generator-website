import { FieldArray, Formik } from 'formik';
import React from 'react';

import { FormColorInput, FormGroup, FormInput, FormLongInput } from '../../components/FormGroups';
import { PageSegment } from '../../components/PageSegment';
import { Meta } from '../../layout/Meta';
import { TemplatePage } from '../../templates/TemplatePage';
import { Globals } from '../../utils/AppConfig';

const templateInfo = {
	title: 'Misaligned (Custom)',
	author: 'Eggy',
	authorUrl: 'https://toyhou.se/Eggy',
	description: '',
	url: 'https://toyhou.se/9214327.-freebie-misaligned',
	policyUrl: 'https://toyhou.se/~bulletins/40160.freebie-rules',
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
					colors: {
						focal: '#a09fba',
						contentBox: '#444',
						background: '#222',
						font: 'white',
					},
					images: {
						left: '/img/placeholder-solid.png',
						avatar: '/img/placeholder.png',
						leftProfile: '/img/placeholder.png',
					},
					title: 'Title',
					about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat neque ex, dapibus porttitor purus lacinia in. Cras vel eros massa. Sed in eleifend tortor, in volutpat leo. Phasellus in efficitur ipsum. Nunc mollis, elit et tempus commodo, ipsum lorem maximus ante, vel aliquet leo lectus in dui. Donec condimentum ipsum viverra, pharetra augue vel, aliquam mauris. Fusce at nisi finibus, bibendum ligula et, molestie erat. Vestibulum porttitor volutpat odio vulputate pharetra. Ut eget sapien quis nunc lobortis blandit.',
					trivia: [{ value: 'One' }, { value: 'Two' }],
					profile: {
						name: 'write a name',
						age: 'too old',
						gender: 'content',
						height: 'content',
						race: 'content',
						role: 'content',
						demeanor: 'content',
						themeUrl: 'https://www.youtube.com/watch?v=nx-qpEMUzes',
					},
					quote: 'Tagline or Quote goes here.',
				}}
				onSubmit={() => {}}
			>
				{({ values }) => (
					<>
						<div className="tw-flex tw-flex-col lg:tw-flex-row tw-px-4 tw-mx-auto">
							<div className="tw-mr-0 lg:tw-mr-4 lg:tw-w-1/3 tw-prose tw-prose-indigo">
								<h2>Form</h2>
                <FormInput for="title" />
								<FormGroup title="Colors">
									<FormColorInput for="colors.focal" />
									<FormColorInput for="colors.contentBox" />
									<FormColorInput for="colors.background" />
									<FormColorInput for="colors.font" />
								</FormGroup>
								<FormGroup title="Profile">
									<FormInput for="profile.name" />
									<FormInput for="profile.age" />
									<FormInput for="profile.gender" />
									<FormInput for="profile.height" />
									<FormInput for="profile.race" />
									<FormInput for="profile.demeanor" />
									<FormInput for="profile.themeUrl" />
								</FormGroup>
								<FormGroup title="Content">
									<FormLongInput for="about" />
									<FieldArray name="trivia">
										{({ remove, push }) => (
											<div>
												{values.trivia.length > 0 &&
													values.trivia.map(
														(_item, index) => (
															<div
																key={index}
																className="my-4"
															>
																<FormInput
																	for={`trivia[${index}].value`}
																/>
																<button
																	className="btn btn-danger"
																	onClick={() =>
																		remove(
																			index
																		)
																	}
																>
																	remove
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
                <FormGroup title="Images">
                <FormInput for="images.left" />
                <FormInput for="images.avatar" />
                </FormGroup>
								<FormGroup title="Extras">
									<FormInput for="quote" />
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
									<div
										style={{
											borderRadius: '1em',
											maxWidth: 1140,
											boxShadow:
												'0 0 1em rgba(0, 0, 0, 0.25)',
											color: values.colors.font,
											background:
												values.colors.background,
										}}
										className="container-fluid p-3 my-5"
									>
										<div className="row no-gutters">
											<div className="col-lg-3 push-lg-9 mb-3">
												<div
													style={{
														borderRadius: '1em',
														fontSize: '10.5pt',
														background:
															values.colors
																.contentBox,
													}}
													className="card border-0 h-100 pt-3 px-md-2 px-3 pb-md-0 pb-2"
												>
													{/*--------- avatar -- use a 200 x 200 image ------------------------*/}
													<img
														src={
															values.images.avatar
														}
														className="d-block p-2 mx-auto mb-3 rounded-circle"
														style={{
															maxHeight: 210,
															background:
																'#a09fba',
														}}
													/>
													{/*------ stats -------------------------------------*/}
													<div className="row no-gutters">
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Name{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{
																values.profile
																	.name
															}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Age{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{values.profile.age}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Gender{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{
																values.profile
																	.gender
															}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Height{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{
																values.profile
																	.height
															}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Race{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{
																values.profile
																	.race
															}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Role{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{
																values.profile
																	.role
															}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Demeanor{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{
																values.profile
																	.demeanor
															}
														</div>
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															Theme{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															{/* link a song here */}
															<a
																href={
																	values
																		.profile
																		.themeUrl
																}
																target="_BLANK"
																style={{
																	color: values
																		.colors
																		.focal,
																}}
															>
																<i className="fas fa-question fa-fw" />
																<i className="fas fa-music fa-fw" />
																<i className="fas fa-question fa-fw" />
															</a>
														</div>
														{/* credit -- pls leave this ------*/}
														<div
															className="col-6 text-right text-uppercase pr-1"
															style={{
																opacity: '0.7',
																letterSpacing: 1,
															}}
														>
															HTML{' '}
															<i className="fas fa-angle-double-right fa-fw" />
														</div>
														<div className="col-6 mb-2">
															<a
																href="https://toyhou.se/eggy"
																target="_BLANK"
																style={{
																	color: values
																		.colors
																		.focal,
																}}
															>
																Eggy
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-9 pull-lg-3 pr-md-3 mb-3">
												<div className="row no-gutters">
													<div className="col-12 mb-3">
														<div
															style={{
																background:
																	values
																		.colors
																		.focal,
																borderRadius:
																	'1em',
															}}
															className="card border-0 p-3"
														>
															<h1 className="display-4 text-white mb-0">
																{/* title block -- you can change the icon -- uses font awesome icons */}
																<i className="fas fa-crown fa-fw" />{' '}
																{values.title}
															</h1>
														</div>
													</div>
													<div className="col-md-5 mb-md-0 mb-3">
														<div
															className="border-0 h-100 modal-open"
															style={{
																borderRadius:
																	'1em',
																background:
																	values
																		.colors
																		.contentBox,
															}}
														>
															{/*---- FOCAL IMAGE --- will scale & crop with screen -- focus in top & center of image ---------*/}
															<div
																style={{
																	backgroundImage: `url(${values.images.left})`,
																	backgroundSize:
																		'cover',
																	backgroundPosition:
																		'top center',
																	minHeight: 400,
																}}
																className="h-100"
															/>
														</div>
													</div>
													<div className="col-md-7 pl-md-3">
														{/*- about block -- will scroll when filled -*/}
														<div
															className="pt-3 px-3 pb-1"
															style={{
																borderRadius:
																	'1em',
																fontSize:
																	'10pt',
																height: 450,
																overflow:
																	'auto',
																background:
																	values
																		.colors
																		.contentBox,
															}}
														>
															<h4
																className="text-uppercase"
																style={{
																	letterSpacing: 1,
																	fontWeight: 300,
																	opacity:
																		'0.7',
																}}
															>
																<i className="fas fa-bookmark mr-1" />
																About
															</h4>
															<div className="mb-2">
																{values.about
																	.split('\n')
																	.map(
																		(t) => (
																			<p>
																				{
																					t
																				}
																			</p>
																		)
																	)}
															</div>
															<h4
																className="text-uppercase"
																style={{
																	letterSpacing: 1,
																	fontWeight: 300,
																	opacity:
																		'0.7',
																}}
															>
																<i className="fas fa-bookmark mr-1" />
																Trivia
															</h4>
															<ul>
																{values.trivia.map(
																	(item) => (
																		<li className="mb-2">
																			{
																				item.value
																			}
																		</li>
																	)
																)}
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="p-3"
											style={{
												borderRadius: '1em',
												background: values.colors.focal,
											}}
										>
											<p
												className="text-white text-center"
												style={{ letterSpacing: 1 }}
											>
												<i className="fas fa-quote-left fa-fw mr-1 pull-left" />
												<span>{values.quote}</span>
												<i className="fas fa-quote-right fa-fw ml-1 pull-right" />
											</p>
										</div>
									</div>
									{/* ### END ### */}
								</PageSegment>
							</div>
						</div>
						<PageSegment>
							<h2>Results</h2>
							<pre className="bg-dark text-white tw-p-6 tw-rounded-md tw-select-all">
								<code>{`<!-- main container -- set bg color & font color here -->
<!-- ${ Globals.watermark } -->
<div style="border-radius: 1em; max-width: 1140px; box-shadow: 0 0 1em rgba(0,0,0,.25); color: ${values.colors.font}; background: ${values.colors.background};" 
class="container-fluid p-3 my-5" >
<div class="row no-gutters">
  <div class="col-lg-3 push-lg-9 mb-3">
    <div style="border-radius: 1em; font-size: 10.5pt; background: ${values.colors.contentBox};"
     class="card border-0 h-100 pt-3 px-md-2 px-3 pb-md-0 pb-2" >
          <!----------- avatar -- use a 200 x 200 image -------------------------->
          <img src="${values.images.avatar}"
          class="d-block p-2 mx-auto mb-3 rounded-circle" style="max-height:210px; background: ${values.colors.focal};">
 
          <!-------- stats --------------------------------------->
          <div class="row no-gutters">
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Name <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
                ${values.profile.name}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Age <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
              ${values.profile.age}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Gender <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
              ${values.profile.gender}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Height <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
              ${values.profile.height}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Race <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
              ${values.profile.race}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Role <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
              ${values.profile.role}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Demeanor <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
              ${values.profile.demeanor}</div>
 
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                Theme <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
                <!-- link a song here -->
                <a href="${values.profile.themeUrl}" target="_BLANK" style="color: ${values.colors.focal};">
                  <i class="fas fa-music-alt fa-fw" /><i class="fas fa-music fa-fw" /><i class="fas fa-music-alt fa-fw" /></a></div>
                <!-- credit -- pls leave this -------->
              <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                HTML <i class="fal fa-angle-double-right fa-fw"></i></div>
              <div class="col-6 mb-2">
                <a href="/eggy" target="_BLANK" style="color: ${values.colors.focal};">Eggy</a></div>
 
          </div>
        </div>
  </div>
  <div class="col-lg-9 pull-lg-3 pr-md-3 mb-3">
    <div class="row no-gutters">
      <div class="col-12 mb-3">
        <div style="background: ${values.colors.focal}; border-radius: 1em;" class="card border-0 p-3" ><h1 class="display-4 text-white mb-0">
          <!-- title block -- you can change the icon -- uses font awesome icons -->
          <i class="fal fa-crown fa-fw" /> ${values.title}</h1></div>
      </div>
 
      <div class="col-md-5 mb-md-0 mb-3">
        <div class="border-0 h-100 modal-open" style="border-radius: 1em; background: ${values.colors.contentBox};">
      <!------ FOCAL IMAGE --- will scale & crop with screen -- focus in top & center of image ----------->
        <div style="background-image: url(${values.images.left}); 
        background-size: cover; background-position: top center; min-height: 400px;" class="h-100"></div>
    </div>
      </div>
      <div class="col-md-7 pl-md-3">
        <!--- about block -- will scroll when filled --->
        <div class="pt-3 px-3 pb-1" style="border-radius: 1em; font-size: 10pt; height: 450px; overflow:auto; background: ${values.colors.contentBox};">
            <h4 class="text-uppercase" style="letter-spacing:1px; font-weight: 300; opacity: 0.7;">
              <i class="fal fa-bookmark mr-1"></i>About
            </h4>
            <div class="mb-2">${values.about.split('\n').map(c => `<p>${c}</p>`).join('')}</div>
 
            <h4 class="text-uppercase" style="letter-spacing:1px; font-weight: 300; opacity: 0.7;">
              <i class="fal fa-bookmark mr-1"></i>Trivia
            </h4>
            <ul>
              ${values.trivia.map(item => `<li class="mb-2">${item.value}</li>`).join('')}
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="p-3" style="border-radius: 1em; background: ${values.colors.focal};"><p class="text-white text-center" style="letter-spacing: 1px;">
  <i class="fal fa-quote-left fa-fw mr-1 pull-left" /><span>
  ${values.quote}
  </span><i class="fal fa-quote-right fa-fw ml-1 pull-right" /></p></div>
  <!-- ${ Globals.watermark } -->
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
